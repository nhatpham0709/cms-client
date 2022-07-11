<template>
  <div class="flex flex-wrap text-black dark:text-white">
    <div class="pt-6 px-4">
      <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        <div
          class="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex-shrink-0">
              <span class="text-2xl sm:text-3xl leading-none font-bold"
                >$45,385</span
              >
              <h3 class="text-base font-normal text-gray-500">
                Sales this week
              </h3>
            </div>
            <div
              class="flex items-center justify-end flex-1 text-green-500 text-base font-bold"
            >
              12.5%
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div id="main-chart" style="min-height: 435px">
            <div
              id="apexchartsj5tumlzk"
              class="apexcharts-canvas apexchartsj5tumlzk apexcharts-theme-light"
              style="width: 901px; height: 420px"
            >
              <svg
                id="SvgjsSvg1090"
                width="901"
                height="420"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.dev"
                class="apexcharts-svg apexcharts-zoomable"
                xmlns:data="ApexChartsNS"
                transform="translate(0, 0)"
                style="background: transparent"
              >
                <g
                  id="SvgjsG1092"
                  class="apexcharts-inner apexcharts-graphical"
                  transform="translate(70.890625, 30)"
                >
                  <defs id="SvgjsDefs1091">
                    <clipPath id="gridRectMaskj5tumlzk">
                      <rect
                        id="SvgjsRect1098"
                        width="804.65625"
                        height="351.494"
                        x="-4"
                        y="-2"
                        rx="0"
                        ry="0"
                        opacity="1"
                        stroke-width="0"
                        stroke="none"
                        stroke-dasharray="0"
                        fill="#fff"
                      ></rect>
                    </clipPath>
                    <clipPath id="forecastMaskj5tumlzk"></clipPath>
                    <clipPath id="nonForecastMaskj5tumlzk"></clipPath>
                    <clipPath id="gridRectMarkerMaskj5tumlzk">
                      <rect
                        id="SvgjsRect1099"
                        width="800.65625"
                        height="351.494"
                        x="-2"
                        y="-2"
                        rx="0"
                        ry="0"
                        opacity="1"
                        stroke-width="0"
                        stroke="none"
                        stroke-dasharray="0"
                        fill="#fff"
                      ></rect>
                    </clipPath>
                  </defs>
                  <line
                    id="SvgjsLine1097"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="347.494"
                    stroke="#b6b6b6"
                    stroke-dasharray="3"
                    stroke-linecap="butt"
                    class="apexcharts-xcrosshairs"
                    x="0"
                    y="0"
                    width="1"
                    height="347.494"
                    fill="#b1b9c4"
                    filter="none"
                    fill-opacity="0.9"
                    stroke-width="1"
                  ></line>
                  <g
                    id="SvgjsG1106"
                    class="apexcharts-xaxis"
                    transform="translate(0, 0)"
                  >
                    <g
                      id="SvgjsG1107"
                      class="apexcharts-xaxis-texts-g"
                      transform="translate(0, -4)"
                    >
                      <text
                        id="SvgjsText1109"
                        font-family="Inter, sans-serif"
                        x="0"
                        y="376.494"
                        text-anchor="middle"
                        dominant-baseline="auto"
                        font-size="14px"
                        font-weight="500"
                        fill="#6b7280"
                        class="apexcharts-text apexcharts-xaxis-label"
                        style="font-family: Inter, sans-serif"
                      >
                        <tspan id="SvgjsTspan1110">01 Feb</tspan>
                        <title>01 Feb</title>
                      </text>
                      <text
                        id="SvgjsText1112"
                        font-family="Inter, sans-serif"
                        x="132.77604166666669"
                        y="376.494"
                        text-anchor="middle"
                        dominant-baseline="auto"
                        font-size="14px"
                        font-weight="500"
                        fill="#6b7280"
                        class="apexcharts-text apexcharts-xaxis-label"
                        style="font-family: Inter, sans-serif"
                      >
                        <tspan id="SvgjsTspan1113">02 Feb</tspan>
                        <title>02 Feb</title>
                      </text>
                      <text
                        id="SvgjsText1115"
                        font-family="Inter, sans-serif"
                        x="265.5520833333333"
                        y="376.494"
                        text-anchor="middle"
                        dominant-baseline="auto"
                        font-size="14px"
                        font-weight="500"
                        fill="#6b7280"
                        class="apexcharts-text apexcharts-xaxis-label"
                        style="font-family: Inter, sans-serif"
                      >
                        <tspan id="SvgjsTspan1116">03 Feb</tspan>
                        <title>03 Feb</title>
                      </text>
                      <text
                        id="SvgjsText1118"
                        font-family="Inter, sans-serif"
                        x="398.32812499999994"
                        y="376.494"
                        text-anchor="middle"
                        dominant-baseline="auto"
                        font-size="14px"
                        font-weight="500"
                        fill="#6b7280"
                        class="apexcharts-text apexcharts-xaxis-label"
                        style="font-family: Inter, sans-serif"
                      >
                        <tspan id="SvgjsTspan1119">04 Feb</tspan>
                        <title>04 Feb</title>
                      </text>
                      <text
                        id="SvgjsText1121"
                        font-family="Inter, sans-serif"
                        x="531.1041666666665"
                        y="376.494"
                        text-anchor="middle"
                        dominant-baseline="auto"
                        font-size="14px"
                        font-weight="500"
                        fill="#6b7280"
                        class="apexcharts-text apexcharts-xaxis-label"
                        style="font-family: Inter, sans-serif"
                      >
                        <tspan id="SvgjsTspan1122">05 Feb</tspan>
                        <title>05 Feb</title>
                      </text>
                      <text
                        id="SvgjsText1124"
                        font-family="Inter, sans-serif"
                        x="663.8802083333331"
                        y="376.494"
                        text-anchor="middle"
                        dominant-baseline="auto"
                        font-size="14px"
                        font-weight="500"
                        fill="#6b7280"
                        class="apexcharts-text apexcharts-xaxis-label"
                        style="font-family: Inter, sans-serif"
                      >
                        <tspan id="SvgjsTspan1125">06 Feb</tspan>
                        <title>06 Feb</title>
                      </text>
                      <text
                        id="SvgjsText1127"
                        font-family="Inter, sans-serif"
                        x="796.6562499999998"
                        y="376.494"
                        text-anchor="middle"
                        dominant-baseline="auto"
                        font-size="14px"
                        font-weight="500"
                        fill="#6b7280"
                        class="apexcharts-text apexcharts-xaxis-label"
                        style="font-family: Inter, sans-serif"
                      >
                        <tspan id="SvgjsTspan1128">07 Feb</tspan>
                        <title>07 Feb</title>
                      </text>
                    </g>
                    <line
                      id="SvgjsLine1129"
                      x1="0"
                      y1="348.494"
                      x2="796.65625"
                      y2="348.494"
                      stroke="#f3f4f6"
                      stroke-dasharray="0"
                      stroke-width="1"
                      stroke-linecap="butt"
                    ></line>
                  </g>
                  <g id="SvgjsG1146" class="apexcharts-grid">
                    <g
                      id="SvgjsG1147"
                      class="apexcharts-gridlines-horizontal"
                      style="display: none"
                    >
                      <line
                        id="SvgjsLine1156"
                        x1="0"
                        y1="0"
                        x2="796.65625"
                        y2="0"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        class="apexcharts-gridline"
                      ></line>
                      <line
                        id="SvgjsLine1157"
                        x1="0"
                        y1="57.915666666666674"
                        x2="796.65625"
                        y2="57.915666666666674"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        class="apexcharts-gridline"
                      ></line>
                      <line
                        id="SvgjsLine1158"
                        x1="0"
                        y1="115.83133333333335"
                        x2="796.65625"
                        y2="115.83133333333335"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        class="apexcharts-gridline"
                      ></line>
                      <line
                        id="SvgjsLine1159"
                        x1="0"
                        y1="173.747"
                        x2="796.65625"
                        y2="173.747"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        class="apexcharts-gridline"
                      ></line>
                      <line
                        id="SvgjsLine1160"
                        x1="0"
                        y1="231.6626666666667"
                        x2="796.65625"
                        y2="231.6626666666667"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        class="apexcharts-gridline"
                      ></line>
                      <line
                        id="SvgjsLine1161"
                        x1="0"
                        y1="289.5783333333334"
                        x2="796.65625"
                        y2="289.5783333333334"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        class="apexcharts-gridline"
                      ></line>
                      <line
                        id="SvgjsLine1162"
                        x1="0"
                        y1="347.494"
                        x2="796.65625"
                        y2="347.494"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                        class="apexcharts-gridline"
                      ></line>
                    </g>
                    <g
                      id="SvgjsG1148"
                      class="apexcharts-gridlines-vertical"
                      style="display: none"
                    ></g>
                    <line
                      id="SvgjsLine1149"
                      x1="0"
                      y1="348.494"
                      x2="0"
                      y2="354.494"
                      stroke="#f3f4f6"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine1150"
                      x1="132.77604166666666"
                      y1="348.494"
                      x2="132.77604166666666"
                      y2="354.494"
                      stroke="#f3f4f6"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine1151"
                      x1="265.5520833333333"
                      y1="348.494"
                      x2="265.5520833333333"
                      y2="354.494"
                      stroke="#f3f4f6"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine1152"
                      x1="398.328125"
                      y1="348.494"
                      x2="398.328125"
                      y2="354.494"
                      stroke="#f3f4f6"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine1153"
                      x1="531.1041666666666"
                      y1="348.494"
                      x2="531.1041666666666"
                      y2="354.494"
                      stroke="#f3f4f6"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine1154"
                      x1="663.8802083333333"
                      y1="348.494"
                      x2="663.8802083333333"
                      y2="354.494"
                      stroke="#f3f4f6"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine1155"
                      x1="796.6562499999999"
                      y1="348.494"
                      x2="796.6562499999999"
                      y2="354.494"
                      stroke="#f3f4f6"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine1164"
                      x1="0"
                      y1="347.494"
                      x2="796.65625"
                      y2="347.494"
                      stroke="transparent"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                    ></line>
                    <line
                      id="SvgjsLine1163"
                      x1="0"
                      y1="1"
                      x2="0"
                      y2="347.494"
                      stroke="transparent"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                    ></line>
                  </g>
                  <g
                    id="SvgjsG1100"
                    class="apexcharts-area-series apexcharts-plot-series"
                  >
                    <g
                      id="SvgjsG1101"
                      class="apexcharts-series"
                      seriesName="Revenue"
                      data:longestSeries="true"
                      rel="1"
                      data:realIndex="0"
                    >
                      <path
                        id="SvgjsPath1104"
                        d="M 0 347.494L 0 141.31422666666685C 46.471614583333334 141.31422666666685 86.30442708333335 221.23784666666643 132.77604166666669 221.23784666666643C 179.24765625000003 221.23784666666643 219.08046875000002 257.14555999999993 265.55208333333337 257.14555999999993C 312.0236979166667 257.14555999999993 351.85651041666665 42.85759333333317 398.328125 42.85759333333317C 444.79973958333335 42.85759333333317 484.6325520833334 141.31422666666685 531.1041666666667 141.31422666666685C 577.5757812500001 141.31422666666685 617.40859375 199.22989333333317 663.8802083333334 199.22989333333317C 710.3518229166667 199.22989333333317 750.1846354166667 315.0612266666667 796.65625 315.0612266666667C 796.65625 315.0612266666667 796.65625 315.0612266666667 796.65625 347.494M 796.65625 315.0612266666667z"
                        fill="rgba(6,148,162,0.3)"
                        fill-opacity="1"
                        stroke-opacity="1"
                        stroke-linecap="butt"
                        stroke-width="0"
                        stroke-dasharray="0"
                        class="apexcharts-area"
                        index="0"
                        clip-path="url(#gridRectMaskj5tumlzk)"
                        pathTo="M 0 347.494L 0 141.31422666666685C 46.471614583333334 141.31422666666685 86.30442708333335 221.23784666666643 132.77604166666669 221.23784666666643C 179.24765625000003 221.23784666666643 219.08046875000002 257.14555999999993 265.55208333333337 257.14555999999993C 312.0236979166667 257.14555999999993 351.85651041666665 42.85759333333317 398.328125 42.85759333333317C 444.79973958333335 42.85759333333317 484.6325520833334 141.31422666666685 531.1041666666667 141.31422666666685C 577.5757812500001 141.31422666666685 617.40859375 199.22989333333317 663.8802083333334 199.22989333333317C 710.3518229166667 199.22989333333317 750.1846354166667 315.0612266666667 796.65625 315.0612266666667C 796.65625 315.0612266666667 796.65625 315.0612266666667 796.65625 347.494M 796.65625 315.0612266666667z"
                        pathFrom="M -1 3822.434L -1 3822.434L 132.77604166666669 3822.434L 265.55208333333337 3822.434L 398.328125 3822.434L 531.1041666666667 3822.434L 663.8802083333334 3822.434L 796.65625 3822.434"
                      ></path>
                      <path
                        id="SvgjsPath1105"
                        d="M 0 141.31422666666685C 46.471614583333334 141.31422666666685 86.30442708333335 221.23784666666643 132.77604166666669 221.23784666666643C 179.24765625000003 221.23784666666643 219.08046875000002 257.14555999999993 265.55208333333337 257.14555999999993C 312.0236979166667 257.14555999999993 351.85651041666665 42.85759333333317 398.328125 42.85759333333317C 444.79973958333335 42.85759333333317 484.6325520833334 141.31422666666685 531.1041666666667 141.31422666666685C 577.5757812500001 141.31422666666685 617.40859375 199.22989333333317 663.8802083333334 199.22989333333317C 710.3518229166667 199.22989333333317 750.1846354166667 315.0612266666667 796.65625 315.0612266666667"
                        fill="none"
                        fill-opacity="1"
                        stroke="#0694a2"
                        stroke-opacity="1"
                        stroke-linecap="butt"
                        stroke-width="4"
                        stroke-dasharray="0"
                        class="apexcharts-area"
                        index="0"
                        clip-path="url(#gridRectMaskj5tumlzk)"
                        pathTo="M 0 141.31422666666685C 46.471614583333334 141.31422666666685 86.30442708333335 221.23784666666643 132.77604166666669 221.23784666666643C 179.24765625000003 221.23784666666643 219.08046875000002 257.14555999999993 265.55208333333337 257.14555999999993C 312.0236979166667 257.14555999999993 351.85651041666665 42.85759333333317 398.328125 42.85759333333317C 444.79973958333335 42.85759333333317 484.6325520833334 141.31422666666685 531.1041666666667 141.31422666666685C 577.5757812500001 141.31422666666685 617.40859375 199.22989333333317 663.8802083333334 199.22989333333317C 710.3518229166667 199.22989333333317 750.1846354166667 315.0612266666667 796.65625 315.0612266666667"
                        pathFrom="M -1 3822.434L -1 3822.434L 132.77604166666669 3822.434L 265.55208333333337 3822.434L 398.328125 3822.434L 531.1041666666667 3822.434L 663.8802083333334 3822.434L 796.65625 3822.434"
                      ></path>
                      <g
                        id="SvgjsG1102"
                        class="apexcharts-series-markers-wrap"
                        data:realIndex="0"
                      >
                        <g class="apexcharts-series-markers">
                          <circle
                            id="SvgjsCircle1170"
                            r="0"
                            cx="0"
                            cy="0"
                            class="apexcharts-marker winwy0lau no-pointer-events"
                            stroke="#ffffff"
                            fill="#0694a2"
                            fill-opacity="1"
                            stroke-width="2"
                            stroke-opacity="0.9"
                            default-marker-size="0"
                          ></circle>
                        </g>
                      </g>
                    </g>
                    <g
                      id="SvgjsG1103"
                      class="apexcharts-datalabels"
                      data:realIndex="0"
                    ></g>
                  </g>
                  <line
                    id="SvgjsLine1165"
                    x1="0"
                    y1="0"
                    x2="796.65625"
                    y2="0"
                    stroke="#b6b6b6"
                    stroke-dasharray="0"
                    stroke-width="1"
                    stroke-linecap="butt"
                    class="apexcharts-ycrosshairs"
                  ></line>
                  <line
                    id="SvgjsLine1166"
                    x1="0"
                    y1="0"
                    x2="796.65625"
                    y2="0"
                    stroke-dasharray="0"
                    stroke-width="0"
                    stroke-linecap="butt"
                    class="apexcharts-ycrosshairs-hidden"
                  ></line>
                  <g id="SvgjsG1167" class="apexcharts-yaxis-annotations"></g>
                  <g id="SvgjsG1168" class="apexcharts-xaxis-annotations"></g>
                  <g id="SvgjsG1169" class="apexcharts-point-annotations"></g>
                  <rect
                    id="SvgjsRect1171"
                    width="0"
                    height="0"
                    x="0"
                    y="0"
                    rx="0"
                    ry="0"
                    opacity="1"
                    stroke-width="0"
                    stroke="none"
                    stroke-dasharray="0"
                    fill="#fefefe"
                    class="apexcharts-zoom-rect"
                  ></rect>
                  <rect
                    id="SvgjsRect1172"
                    width="0"
                    height="0"
                    x="0"
                    y="0"
                    rx="0"
                    ry="0"
                    opacity="1"
                    stroke-width="0"
                    stroke="none"
                    stroke-dasharray="0"
                    fill="#fefefe"
                    class="apexcharts-selection-rect"
                  ></rect>
                </g>
                <rect
                  id="SvgjsRect1096"
                  width="0"
                  height="0"
                  x="0"
                  y="0"
                  rx="0"
                  ry="0"
                  opacity="1"
                  stroke-width="0"
                  stroke="none"
                  stroke-dasharray="0"
                  fill="#fefefe"
                ></rect>
                <g
                  id="SvgjsG1130"
                  class="apexcharts-yaxis"
                  rel="0"
                  transform="translate(40.890625, 0)"
                >
                  <g id="SvgjsG1131" class="apexcharts-yaxis-texts-g">
                    <text
                      id="SvgjsText1132"
                      font-family="Inter, sans-serif"
                      x="20"
                      y="31.6"
                      text-anchor="end"
                      dominant-baseline="auto"
                      font-size="14px"
                      font-weight="500"
                      fill="#6b7280"
                      class="apexcharts-text apexcharts-yaxis-label"
                      style="font-family: Inter, sans-serif"
                    >
                      <tspan id="SvgjsTspan1133">$6600</tspan>
                      <title>$6600</title>
                    </text>
                    <text
                      id="SvgjsText1134"
                      font-family="Inter, sans-serif"
                      x="20"
                      y="89.51566666666668"
                      text-anchor="end"
                      dominant-baseline="auto"
                      font-size="14px"
                      font-weight="500"
                      fill="#6b7280"
                      class="apexcharts-text apexcharts-yaxis-label"
                      style="font-family: Inter, sans-serif"
                    >
                      <tspan id="SvgjsTspan1135">$6500</tspan>
                      <title>$6500</title>
                    </text>
                    <text
                      id="SvgjsText1136"
                      font-family="Inter, sans-serif"
                      x="20"
                      y="147.43133333333336"
                      text-anchor="end"
                      dominant-baseline="auto"
                      font-size="14px"
                      font-weight="500"
                      fill="#6b7280"
                      class="apexcharts-text apexcharts-yaxis-label"
                      style="font-family: Inter, sans-serif"
                    >
                      <tspan id="SvgjsTspan1137">$6400</tspan>
                      <title>$6400</title>
                    </text>
                    <text
                      id="SvgjsText1138"
                      font-family="Inter, sans-serif"
                      x="20"
                      y="205.34700000000004"
                      text-anchor="end"
                      dominant-baseline="auto"
                      font-size="14px"
                      font-weight="500"
                      fill="#6b7280"
                      class="apexcharts-text apexcharts-yaxis-label"
                      style="font-family: Inter, sans-serif"
                    >
                      <tspan id="SvgjsTspan1139">$6300</tspan>
                      <title>$6300</title>
                    </text>
                    <text
                      id="SvgjsText1140"
                      font-family="Inter, sans-serif"
                      x="20"
                      y="263.26266666666675"
                      text-anchor="end"
                      dominant-baseline="auto"
                      font-size="14px"
                      font-weight="500"
                      fill="#6b7280"
                      class="apexcharts-text apexcharts-yaxis-label"
                      style="font-family: Inter, sans-serif"
                    >
                      <tspan id="SvgjsTspan1141">$6200</tspan>
                      <title>$6200</title>
                    </text>
                    <text
                      id="SvgjsText1142"
                      font-family="Inter, sans-serif"
                      x="20"
                      y="321.1783333333334"
                      text-anchor="end"
                      dominant-baseline="auto"
                      font-size="14px"
                      font-weight="500"
                      fill="#6b7280"
                      class="apexcharts-text apexcharts-yaxis-label"
                      style="font-family: Inter, sans-serif"
                    >
                      <tspan id="SvgjsTspan1143">$6100</tspan>
                      <title>$6100</title>
                    </text>
                    <text
                      id="SvgjsText1144"
                      font-family="Inter, sans-serif"
                      x="20"
                      y="379.09400000000005"
                      text-anchor="end"
                      dominant-baseline="auto"
                      font-size="14px"
                      font-weight="500"
                      fill="#6b7280"
                      class="apexcharts-text apexcharts-yaxis-label"
                      style="font-family: Inter, sans-serif"
                    >
                      <tspan id="SvgjsTspan1145">$6000</tspan>
                      <title>$6000</title>
                    </text>
                  </g>
                </g>
                <g id="SvgjsG1093" class="apexcharts-annotations"></g>
              </svg>
              <div class="apexcharts-legend" style="max-height: 210px"></div>
              <div class="apexcharts-tooltip apexcharts-theme-light">
                <div
                  class="apexcharts-tooltip-title"
                  style="font-family: Inter, sans-serif; font-size: 14px"
                ></div>
                <div class="apexcharts-tooltip-series-group" style="order: 1">
                  <span class="apexcharts-tooltip-marker"></span>
                  <div
                    class="apexcharts-tooltip-text"
                    style="font-family: Inter, sans-serif; font-size: 14px"
                  >
                    <div class="apexcharts-tooltip-y-group">
                      <span class="apexcharts-tooltip-text-y-label"></span
                      ><span class="apexcharts-tooltip-text-y-value"></span>
                    </div>
                    <div class="apexcharts-tooltip-goals-group">
                      <span class="apexcharts-tooltip-text-goals-label"></span
                      ><span class="apexcharts-tooltip-text-goals-value"></span>
                    </div>
                    <div class="apexcharts-tooltip-z-group">
                      <span class="apexcharts-tooltip-text-z-label"></span
                      ><span class="apexcharts-tooltip-text-z-value"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"
              >
                <div
                  class="apexcharts-xaxistooltip-text"
                  style="font-family: Inter, sans-serif; font-size: 12px"
                ></div>
              </div>
              <div
                class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"
              >
                <div class="apexcharts-yaxistooltip-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8"
        >
          <div class="mb-4 flex items-center justify-between">
            <div>
              <h3 class="text-xl font-bold mb-2">Latest Transactions</h3>
              <span class="text-base font-normal text-gray-500"
                >This is a list of latest transactions</span
              >
            </div>
            <div class="flex-shrink-0">
              <a
                href="#"
                class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                >View all</a
              >
            </div>
          </div>

          <div class="flex flex-col mt-8">
            <div class="overflow-x-auto rounded-lg">
              <div class="align-middle inline-block min-w-full">
                <div class="shadow overflow-hidden sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Transaction
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date &amp; Time
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <td class="p-4 whitespace-nowrap text-sm font-normal">
                          Payment from
                          <span class="font-semibold">Bonnie Green</span>
                        </td>
                        <td
                          class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                        >
                          Apr 23 ,2021
                        </td>
                        <td class="p-4 whitespace-nowrap text-sm font-semibold">
                          $2300
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        <div
          class="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8"
        >
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="text-2xl sm:text-3xl leading-none font-bold"
                >2,340</span
              >
              <h3 class="text-base font-normal text-gray-500">
                New products this week
              </h3>
            </div>
            <div
              class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
            >
              14.6%
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8"
        >
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="text-2xl sm:text-3xl leading-none font-bold"
                >5,355</span
              >
              <h3 class="text-base font-normal text-gray-500">
                Visitors this week
              </h3>
            </div>
            <div
              class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
            >
              32.9%
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8"
        >
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="text-2xl sm:text-3xl leading-none font-bold"
                >385</span
              >
              <h3 class="text-base font-normal text-gray-500">
                User signups this week
              </h3>
            </div>
            <div
              class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold"
            >
              -2.7%
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
        <div
          class="bg-gray-50 dark:bg-gray-800 shadow rounded-lg mb-4 p-4 sm:p-6 h-full"
        >
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold leading-none">Latest Customers</h3>
            <a
              href="#"
              class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
            >
              View all
            </a>
          </div>
          <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200">
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium truncate">Neil Sims</p>
                    <p class="text-sm text-gray-500 truncate">
                      email@windster.com
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    $320
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8"
        >
          <h3 class="text-xl leading-none font-bold mb-10">
            Acquisition Overview
          </h3>
          <div class="block w-full overflow-x-auto">
            <table class="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    class="px-4 bg-gray-50 dark:bg-gray-800 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
                  >
                    Top Channels
                  </th>
                  <th
                    class="px-4 bg-gray-50 dark:bg-gray-800 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
                  >
                    Users
                  </th>
                  <th
                    class="px-4 bg-gray-50 dark:bg-gray-800 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"
                  ></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="text-gray-500">
                  <th
                    class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                  >
                    Organic Search
                  </th>
                  <td
                    class="border-t-0 px-4 align-middle text-xs font-medium whitespace-nowrap p-4"
                  >
                    5,649
                  </td>
                  <td
                    class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4"
                  >
                    <div class="flex items-center">
                      <span class="mr-2 text-xs font-medium">30%</span>
                      <div class="relative w-full">
                        <div class="w-full bg-gray-200 rounded-sm h-2">
                          <div
                            class="bg-cyan-600 h-2 rounded-sm"
                            style="width: 30%"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `${this.$t(`meta.dashboard.title`)} | ${this.$config.appName}`,
      meta: [
        {
          name: 'description',
          content: this.$t('meta.dashboard.description'),
        },
      ],
    }
  },
}
</script>
