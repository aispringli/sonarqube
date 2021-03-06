/*
 * SonarQube
 * Copyright (C) 2009-2021 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
package org.sonar.server.platform.db.migration.version.v91;

import java.sql.SQLException;
import org.sonar.db.Database;
import org.sonar.db.DatabaseUtils;
import org.sonar.db.dialect.MsSql;
import org.sonar.server.platform.db.migration.sql.DropColumnsBuilder;
import org.sonar.server.platform.db.migration.sql.DropMsSQLDefaultConstraintsBuilder;
import org.sonar.server.platform.db.migration.step.DdlChange;

public class DropUserManagedColumnFromMetricsTable extends DdlChange {

  private static final String TABLE_NAME = "metrics";
  private static final String COLUMN = "user_managed";

  public DropUserManagedColumnFromMetricsTable(Database db) {
    super(db);
  }

  @Override
  public void execute(Context context) throws SQLException {
    if (!checkIfUseManagedColumnExists()) {
      return;
    }

    if (MsSql.ID.equals(getDatabase().getDialect().getId())) {
      context.execute(new DropMsSQLDefaultConstraintsBuilder(getDatabase()).setTable(TABLE_NAME).setColumns(COLUMN).build());
    }
    context.execute(new DropColumnsBuilder(getDatabase().getDialect(), TABLE_NAME, COLUMN).build());
  }

  private boolean checkIfUseManagedColumnExists() throws SQLException {
    try (var connection = getDatabase().getDataSource().getConnection()) {
      if (DatabaseUtils.tableColumnExists(connection, TABLE_NAME, COLUMN)) {
        return true;
      }
    }
    return false;
  }
}
