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
import * as React from 'react';
import { IconProps, ThemedIcon } from './Icon';

export default function GroupIcon({ fill, size = 36, ...iconProps }: IconProps) {
  return (
    <ThemedIcon viewBox="0 0 36 36" {...iconProps}>
      {({ theme }) => (
        <g transform="matrix(0.0625,0,0,0.0625,3,4)">
          <path
            d="M148.25,224C121.25,224.833 99.167,235.5 82,256L48.5,256C34.833,256 23.333,252.625 14,245.875C4.667,239.125 0,229.25 0,216.25C0,157.417 10.333,128 31,128C32,128 35.625,129.75 41.875,133.25C48.125,136.75 56.25,140.292 66.25,143.875C76.25,147.458 86.167,149.25 96,149.25C107.167,149.25 118.25,147.333 129.25,143.5C128.417,149.667 128,155.167 128,160C128,183.167 134.75,204.5 148.25,224ZM416,383.25C416,403.25 409.917,419.042 397.75,430.625C385.583,442.208 369.417,448 349.25,448L130.75,448C110.583,448 94.417,442.208 82.25,430.625C70.083,419.042 64,403.25 64,383.25C64,374.417 64.292,365.792 64.875,357.375C65.458,348.958 66.625,339.875 68.375,330.125C70.125,320.375 72.333,311.333 75,303C77.667,294.667 81.25,286.542 85.75,278.625C90.25,270.708 95.417,263.958 101.25,258.375C107.083,252.792 114.208,248.333 122.625,245C131.042,241.667 140.333,240 150.5,240C152.167,240 155.75,241.792 161.25,245.375C166.75,248.958 172.833,252.958 179.5,257.375C186.167,261.792 195.083,265.792 206.25,269.375C217.417,272.958 228.667,274.75 240,274.75C251.333,274.75 262.583,272.958 273.75,269.375C284.917,265.792 293.833,261.792 300.5,257.375C307.167,252.958 313.25,248.958 318.75,245.375C324.25,241.792 327.833,240 329.5,240C339.667,240 348.958,241.667 357.375,245C365.792,248.333 372.917,252.792 378.75,258.375C384.583,263.958 389.75,270.708 394.25,278.625C398.75,286.542 402.333,294.667 405,303C407.667,311.333 409.875,320.375 411.625,330.125C413.375,339.875 414.542,348.958 415.125,357.375C415.708,365.792 416,374.417 416,383.25ZM160,64C160,81.667 153.75,96.75 141.25,109.25C128.75,121.75 113.667,128 96,128C78.333,128 63.25,121.75 50.75,109.25C38.25,96.75 32,81.667 32,64C32,46.333 38.25,31.25 50.75,18.75C63.25,6.25 78.333,0 96,0C113.667,0 128.75,6.25 141.25,18.75C153.75,31.25 160,46.333 160,64ZM336,160C336,186.5 326.625,209.125 307.875,227.875C289.125,246.625 266.5,256 240,256C213.5,256 190.875,246.625 172.125,227.875C153.375,209.125 144,186.5 144,160C144,133.5 153.375,110.875 172.125,92.125C190.875,73.375 213.5,64 240,64C266.5,64 289.125,73.375 307.875,92.125C326.625,110.875 336,133.5 336,160ZM480,216.25C480,229.25 475.333,239.125 466,245.875C456.667,252.625 445.167,256 431.5,256L398,256C380.833,235.5 358.75,224.833 331.75,224C345.25,204.5 352,183.167 352,160C352,155.167 351.583,149.667 350.75,143.5C361.75,147.333 372.833,149.25 384,149.25C393.833,149.25 403.75,147.458 413.75,143.875C423.75,140.292 431.875,136.75 438.125,133.25C444.375,129.75 448,128 449,128C469.667,128 480,157.417 480,216.25ZM448,64C448,81.667 441.75,96.75 429.25,109.25C416.75,121.75 401.667,128 384,128C366.333,128 351.25,121.75 338.75,109.25C326.25,96.75 320,81.667 320,64C320,46.333 326.25,31.25 338.75,18.75C351.25,6.25 366.333,0 384,0C401.667,0 416.75,6.25 429.25,18.75C441.75,31.25 448,46.333 448,64Z"
            style={{ fill: fill || theme.colors.gray67 }}
          />
        </g>
      )}
    </ThemedIcon>
  );
}
