import React from "react";
import SignSymbol from "./SignSymbol";

const TemplateChartComp = (props = {}, sign) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-30 -30 1060 1060"
  >
    <SignSymbol sign={sign} />

    <defs>
      <clipPath id="a" transform="translate(.67 -1)">
        <path fill="none" d="M-1 1h997v997H-1z" />
      </clipPath>
      <clipPath id="b" transform="translate(.67 -1)">
        <path fill="none" d="M457.08 461h81.72v81.72h-81.72z" />
      </clipPath>
    </defs>
    <g clip-path="url(#a)" fill="none">
      <circle
        cx="498.17"
        cy="498.5"
        r="495.71"
        stroke="#000"
        stroke-width="1.914"
      />
      <circle
        cx="498.68"
        cy="501.66"
        r="411.6"
        stroke="#1d1d1b"
        stroke-width="6"
      />
    </g>
    <text
      transform="rotate(82.75 -294.441 291.786)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      P
    </text>
    <text
      transform="rotate(80.62 -317.211 304.402)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      l
    </text>
    <text
      transform="rotate(79.2 -330.395 310.24)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      u
    </text>
    <text
      transform="rotate(77.08 -353.564 322.403)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      t
    </text>
    <text
      transform="rotate(75.67 -368.85 330.046)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      o
    </text>
    <text
      transform="rotate(74.27 -388.049 342.358)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(72.87 -402.524 348.16)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(71.48 -417.492 354.12)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.33 .94 -.94 .33 54.86 649.23)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(63.86 -500.17 372.802)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(58 -620.584 460.37)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(56 -654.282 471.969)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      N
    </text>
    <text
      transform="rotate(53 -712.9 504.725)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      e
    </text>
    <text
      transform="matrix(.63 .78 -.78 .63 128.11 785)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      p
    </text>
    <text
      transform="rotate(49.5 -798.026 551.801)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      t
    </text>
    <text
      transform="matrix(.68 .74 -.74 .68 147.48 808.31)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      u
    </text>
    <text
      transform="rotate(45.38 -902.89 602.458)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="matrix(.74 .68 -.68 .74 173.36 835.2)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      e
    </text>
    <text
      transform="rotate(41.26 -1031.117 668.622)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(37.11 -1173.792 708.942)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(32.23 -1421.222 871.43)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(31.53 -1461.205 894.784)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(30.12 -1543.336 930.76)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(29.42 -1589.145 957.054)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(28.71 -1637.451 984.945)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(27.3 -1737.205 1028.988)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(26.59 -1793.023 1060.792)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(24.46 -1972.469 1132.639)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      U
    </text>
    <text
      transform="matrix(.93 .38 -.38 .93 314.75 928.62)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      r
    </text>
    <text
      transform="rotate(20.17 -2461.137 1386.407)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      a
    </text>
    <text
      transform="rotate(18.02 -2791.023 1548.78)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="rotate(15.86 -3212.659 1763.96)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      u
    </text>
    <text
      transform="rotate(14 -3704.492 2036.395)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      s
    </text>
    <text
      transform="rotate(10.06 -5223.942 2693.084)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(.64 -86183.023 40016.252)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-6.54 8702.743 -4300.45)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-7.96 7193.837 -3499.215)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      S
    </text>
    <text
      transform="rotate(-10.09 5723.174 -2758.323)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      a
    </text>
    <text
      transform="rotate(-11.5 5029.144 -2434.936)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      t
    </text>
    <text
      transform="rotate(-13.62 4297.223 -2030)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      u
    </text>
    <text
      transform="rotate(-15.73 3748.828 -1757.648)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      r
    </text>
    <text
      transform="rotate(-17.83 3332.847 -1535.827)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="rotate(-18.52 3209.598 -1517.034)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.94 -.33 .33 .94 648.68 940.73)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-20 3006.45 -1398.215)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-21.3 2819.187 -1294.902)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-21.6 2764.913 -1287.827)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.92 -.4 .4 .92 677.05 930.09)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-24.07 2516.243 -1140.577)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-24.76 2450.39 -1112.024)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-26.14 2332.187 -1042.555)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-26.82 2276.614 -1018.888)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-27.51 2222.773 -995.99)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-28.88 2127.23 -939.182)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-29.57 2080.465 -919.653)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.86 -.5 .5 .86 731.35 903.2)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.85 -.52 .52 .85 737.9 899.43)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-31.8 1932.126 -857.512)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-32.9 1896.207 -828.513)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-33.9 1826.545 -797.62)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-35 1793.2 -773.024)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-35.73 1747.838 -754.527)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-37 1699.085 -726.555)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      J
    </text>
    <text
      transform="matrix(.78 -.63 .63 .78 785.24 867.14)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      u
    </text>
    <text
      transform="rotate(-41.19 1537.96 -636.3)"
      font-size="34.454"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      p
    </text>
    <text
      transform="rotate(-43.25 1469.963 -605.029)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      i
    </text>
    <text
      transform="rotate(-44.62 1429.572 -581.861)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      t
    </text>
    <text
      transform="matrix(.69 -.72 .72 .69 828.75 828.73)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      e
    </text>
    <text
      transform="rotate(-48 1343.393 -535.73)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      r
    </text>
    <text
      transform="rotate(-52.89 1237.039 -450.652)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-57.77 1125.913 -433.198)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-58.47 1112.453 -428.5)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-59.88 1090.023 -412.583)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-60.58 1077.418 -408.118)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-61.29 1064.871 -403.732)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-62.7 1044.47 -388.925)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-63.41 1032.547 -384.826)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-64.12 1020.934 -380.746)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-65.54 1002.202 -366.973)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-66.25 991.109 -363.185)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-68.39 966.738 -340.91)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      M
    </text>
    <text
      transform="rotate(-71.26 925.78 -327.881)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      a
    </text>
    <text
      transform="rotate(-73.42 900.42 -313.586)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      r
    </text>
    <text
      transform="rotate(-74.87 882.532 -306.378)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      s
    </text>
    <text
      transform="rotate(-79.21 846.526 -268.814)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-89.36 762.964 -210.75)"
      font-size="34.455"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.09 -1 1 .09 49.67 476.31)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      A
    </text>
    <text
      transform="rotate(-82.74 283.28 197.132)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      s
    </text>
    <text
      transform="matrix(.16 -.99 .99 .16 53.53 440.82)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      c
    </text>
    <text
      transform="rotate(-79 287.024 180.366)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      e
    </text>
    <text
      transform="rotate(-76.96 288.786 169.365)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="rotate(-74.79 289.707 156.378)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      d
    </text>
    <text
      transform="rotate(-72.61 290.643 142.616)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      a
    </text>
    <text
      transform="rotate(-70.44 292.948 130.046)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="rotate(-68.26 294.105 114.967)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      t
    </text>
    <text
      transform="rotate(-63.92 309.259 102.074)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-58.89 301.42 40.368)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-58 301.707 31.615)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-56.04 308.136 20.806)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      D
    </text>
    <text
      transform="rotate(-53 311.055 -9.785)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      e
    </text>
    <text
      transform="rotate(-51.9 308.482 -29.1)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      c
    </text>
    <text
      transform="rotate(-49.67 314.543 -51.062)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      e
    </text>
    <text
      transform="rotate(-47.57 318.207 -76.2)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="matrix(.7 -.71 .71 .7 171.89 196.86)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      d
    </text>
    <text
      transform="matrix(.73 -.69 .69 .73 184.75 183.86)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      a
    </text>
    <text
      transform="rotate(-41.31 327.704 -173.39)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="matrix(.77 -.63 .63 .77 209.61 161.48)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      t
    </text>
    <text
      transform="rotate(-37.86 334.246 -240.814)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-35.12 348.288 -278.422)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-32.38 347.71 -375.918)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-31.01 354.166 -409.466)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.86 -.5 .5 .86 267.82 120.1)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-29.64 357.044 -459.653)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-28.27 364.258 -500.38)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-27.1 365.897 -536.025)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-26.91 368.183 -559.894)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.9 -.43 .43 .9 299.79 102.72)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-24.86 379.112 -645.026)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-24.5 384.297 -678.91)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(-21.44 406.084 -797.04)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      M
    </text>
    <text
      transform="rotate(-18.7 424.228 -1013.325)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      o
    </text>
    <text
      transform="rotate(-16.64 445.087 -1205.525)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      o
    </text>
    <text
      transform="rotate(-14 490.477 -1523.149)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="rotate(-9.72 593.352 -2304.888)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(.83 -3613.685 31195.479)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(8.1 -143.873 3983.777)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(8.1 -155.783 3767.252)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.98 .18 -.18 .98 570.71 62.18)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      S
    </text>
    <text
      transform="rotate(12.31 -8.518 2756.395)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      u
    </text>
    <text
      transform="rotate(15.21 44.204 2299.997)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="rotate(18.11 80.65 1989.352)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(27.1 154.285 1396.193)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(34.67 161.31 1269.508)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="matrix(.82 .58 -.58 .82 756.83 137.81)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(35.9 159.153 1241.527)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(38.92 177.63 1160.905)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      M
    </text>
    <text
      transform="rotate(41.73 179.552 1121.292)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      e
    </text>
    <text
      transform="rotate(43.83 184.007 1085.953)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      r
    </text>
    <text
      transform="rotate(45.22 185.382 1067.5)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      c
    </text>
    <text
      transform="rotate(47.3 190.124 1035.59)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      u
    </text>
    <text
      transform="rotate(49.38 192.348 1010.86)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      r
    </text>
    <text
      transform="matrix(.63 .77 -.77 .63 843.4 217.29)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      y
    </text>
    <text
      transform="rotate(56 211.189 916.538)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(61.04 202.194 899.458)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(62.6 204.986 881.087)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(63.09 204.923 881.504)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(63.9 203.983 874.777)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(65.14 207.408 864.58)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(65.8 208.22 862.56)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(67.88 213.151 839.748)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      V
    </text>
    <text
      transform="rotate(69.93 212.948 828.745)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      e
    </text>
    <text
      transform="rotate(72 215.186 815.865)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      n
    </text>
    <text
      transform="rotate(74.05 215.653 803.585)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      u
    </text>
    <text
      transform="rotate(76.1 216.565 793.01)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    >
      s
    </text>
    <text
      transform="rotate(82.37 238.32 738.713)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <text
      transform="rotate(94.39 249.946 684.089)"
      font-size="33.112"
      font-family="WolpePegasus-Bold,Wolpe Pegasus"
      font-weight="700"
    ></text>
    <g clip-path="url(#a)" fill="none">
      <path stroke="#1d1d1b" stroke-width="6" d="M498.36 0v497.71" />
      <path
        stroke="#000"
        stroke-width=".334"
        d="M500.79 499.93V997M498.33 499.93V997M495.93 499.93V997"
      />
    </g>
    <path
      fill="none"
      stroke="#000"
      stroke-width=".334"
      d="M992.5 504.46H4.87M992.5 502H4.87M992.5 499.6H4.87M772.39 84.59L231.22 917.92M770.33 83.25L229.16 916.58M768.32 81.94L227.15 915.28M495.6 503.32L63.01 258.58M496.81 501.19L64.22 256.44M497.99 499.1L65.4 254.35"
    />
    <path
      fill="none"
      stroke="#1d1d1b"
      stroke-width="2.229"
      d="M929.3 745.44l-78.79-44.58"
    />
    <path
      fill="none"
      stroke="#000"
      stroke-width=".334"
      d="M746.29 927.78L244.56 76.02M748.4 926.53L246.68 74.77M750.47 925.31L248.75 73.55"
    />
    <path
      fill="none"
      stroke="#1d1d1b"
      stroke-width="6"
      d="M60.99 729.78l439.44-228.76"
    />
    <g clip-path="url(#a)" fill="#1d1d1b">
      <path d="M660.83 93.42a20.43 20.43 0 10-20.4-20.78 20.4 20.4 0 0020.4 20.78m.07-44.81a24.53 24.53 0 11-24.57 24.54 24.54 24.54 0 0124.57-24.54" />
      <path d="M660.86 67.55A5.45 5.45 0 11655.4 73a5.46 5.46 0 015.46-5.44M419.23 30.51c8.62 4.47 13.28 11 13.69 19.66-.11 8.72-4.54 15.36-12.93 20.09 7.48.37 16.25-2.72 21.09-10.08a17.69 17.69 0 00-1.81-22.11c-5.1-5.54-11.84-7.94-20-7.56m2.85 42.62a30.87 30.87 0 01-8.11-.84 1.51 1.51 0 01-1.34-1.29 1.41 1.41 0 011.16-1.42 24.79 24.79 0 006.84-3.22A20.09 20.09 0 00428.76 56a16.83 16.83 0 00.79-7.2 18.52 18.52 0 00-6.15-11.89 23.12 23.12 0 00-10-5.36c-.74-.19-1.28-.53-1.39-1.25a1.32 1.32 0 01.95-1.47c1-.28 2-.53 3-.73a26.57 26.57 0 015-.49 28.39 28.39 0 0116.45 4.85 22.15 22.15 0 019.29 12.69 19.24 19.24 0 01.61 6.45 20.83 20.83 0 01-5.79 13 26.36 26.36 0 01-12.23 7.4 29.12 29.12 0 01-7.21 1.14M877.41 255.08a9.74 9.74 0 10-9.74-10.21 9.71 9.71 0 009.72 10.21m1.54 10.25v2.31a1.16 1.16 0 01-1.16 1.16h-.87a1 1 0 01-1-1v-2.45a.07.07 0 00-.08-.07h-2.43a1.08 1.08 0 01-1.08-1.08v-.74a1.24 1.24 0 011.24-1.24h2.24a.08.08 0 00.08-.08v-4a.07.07 0 00-.07-.07c-5.61-1.06-9.3-4.23-10.85-9.78-1.19-6.37 1.16-11.1 6.58-14.41a.08.08 0 000-.13 11 11 0 01-4.86-7.18 1 1 0 01.88-1.18l.76-.07a1.25 1.25 0 011.41.94 7.83 7.83 0 002.68 4.32 8 8 0 0012.85-4.22 1.39 1.39 0 011.48-1h.39a1.24 1.24 0 011.14 1.52 11 11 0 01-4.87 6.91.08.08 0 000 .13c5.42 3.4 7.74 8.17 6.43 14.58-1.61 5.42-5.26 8.52-10.79 9.55a.09.09 0 00-.06.08v3.94a.08.08 0 00.08.08h2.07a1.37 1.37 0 011.37 1.37v.3a1.39 1.39 0 01-1.39 1.39h-2.08a.08.08 0 00-.07.08M965.12 439.82a13.11 13.11 0 10-13.27 13.06 13.08 13.08 0 0013.27-13.06m-21 27.83V464a.46.46 0 01.46-.45h4.87a.46.46 0 00.45-.46v-4.92a1.41 1.41 0 00-1.14-1.39 17.29 17.29 0 116.23.05 1.12 1.12 0 00-.91 1.1V463a.45.45 0 00.45.45h4.88a.46.46 0 01.46.45v3.69h-5.41c-.3 0-.41.08-.4.4v5.8c0 .55-4.13.5-4.13 0v-1-4.72c0-.36-.12-.44-.45-.43M944.23 582.59a13.41 13.41 0 0013.44-13.66 13.46 13.46 0 10-13.45 13.66m19.86-36.31h-6.37v-4.18h13.56v13.54h-4.16v-6.24l-8.92 8.91c.24.35.54.75.81 1.17a16.85 16.85 0 012.79 7.79 17.35 17.35 0 01-4.25 13.47 16.85 16.85 0 01-10.1 5.77 17.24 17.24 0 01-14.69-4 16.88 16.88 0 01-5.82-9.86 17.24 17.24 0 013.37-14.4 17 17 0 0110.11-6.38 17.32 17.32 0 0114.42 3.1c.19.14.32.25.54 0 2.82-2.85 5.66-5.67 8.49-8.51l.23-.25M847.83 783.67v-1.06a1.22 1.22 0 011.25-1.19h.63a11.19 11.19 0 006.57-2.37 16.78 16.78 0 005.79-8.66 14.65 14.65 0 00.65-5.8 7.23 7.23 0 00-2.05-4.66 6 6 0 00-4.31-1.69 7.07 7.07 0 00-6.4 4.92 5.19 5.19 0 00.19 3 1.94 1.94 0 00.41.66 2 2 0 01.56 1.46v1a1 1 0 01-1.33.94c-2.24-.89-3.14-3-3.28-5.55a8.49 8.49 0 011.8-5.61 10.28 10.28 0 016.32-4 9.17 9.17 0 017.77 1.89 10 10 0 013.56 6.31 15.06 15.06 0 01.18 4 20.73 20.73 0 01-1.93 7 20.43 20.43 0 01-4 5.85c-.41.41-.84.79-1.29 1.19a.15.15 0 00.09.26l10.58.18a.14.14 0 00.15-.14l.42-24a1.81 1.81 0 011.84-1.78 1.58 1.58 0 011.55 1.61l-.42 24.26a.15.15 0 00.14.15l3.32.06a1 1 0 01.93 1 2.42 2.42 0 01-2.46 2.38h-1.84a.15.15 0 00-.15.15l-.11 6.2a1.46 1.46 0 01-1.49 1.43h-.56a1.35 1.35 0 01-1.33-1.37l.11-6.3a.15.15 0 00-.14-.15l-20.53-.36a1.15 1.15 0 01-1.13-1.17M668.83 933.93l-2.8.05a.42.42 0 01-.43-.41l-.41-23.83a.42.42 0 00-.43-.41h-2.84a.43.43 0 01-.43-.41v-2.41a.43.43 0 01.41-.43h2.83a.41.41 0 00.41-.42v-2.7a.43.43 0 01.41-.43h2.41a.41.41 0 01.42.41v2.67a.42.42 0 00.43.41l5.24-.09a.41.41 0 01.42.41v2.44a.41.41 0 01-.41.42l-5.22.09a.41.41 0 00-.4.43l.07 4.27a.42.42 0 00.68.32 11.73 11.73 0 012.68-1.6 11.26 11.26 0 013.58-1 7.62 7.62 0 015.3 1.13 8.77 8.77 0 013.26 4.26 12.74 12.74 0 01.89 5.56 17.87 17.87 0 01-4.75 11.34 9.75 9.75 0 00-2.27 3.59 4 4 0 00-.21 1.91 1.84 1.84 0 001.54 1.31.71.71 0 00.42-.14c.43-.34.84-.71 1.25-1.08a4.91 4.91 0 00.43-.48l1.46 1.41a1.25 1.25 0 010 1.78 5.8 5.8 0 01-2.86 1.72 4.39 4.39 0 01-3.42-.89 4.69 4.69 0 01-2.11-4.48 10.43 10.43 0 012.72-6.12 20.6 20.6 0 002.61-3.4 16 16 0 001.86-5.75 10.07 10.07 0 00-1.15-6.28 4.09 4.09 0 00-3.16-2.24 7.92 7.92 0 00-3.44.46 9.37 9.37 0 00-4.83 4.2 2.8 2.8 0 00-.4 1.62q.13 6.25.23 12.5v.31M427.41 967.28a3.8 3.8 0 10-.16-7.6 3.8 3.8 0 00.16 7.6m-2.26-20.87l-3.79.07a.17.17 0 00-.17.14 12.32 12.32 0 01-6.23 9 12 12 0 01-5 1.53.77.77 0 01-.84-.75v-2.29a.75.75 0 01.66-.75 8.59 8.59 0 007.71-9.18 8.62 8.62 0 00-7.93-7.91.84.84 0 01-.76-.81v-2.26a.71.71 0 01.75-.72 12.12 12.12 0 017.32 2.84 12.24 12.24 0 014.28 7.24.19.19 0 00.18.15l3.62-.07a.17.17 0 00.18-.18l-.14-8.34a1 1 0 011-1h1.94a.88.88 0 01.9.87l.15 8.43a.18.18 0 00.18.18l3.63-.07a.16.16 0 00.17-.15 12.34 12.34 0 015.5-8.52 12.17 12.17 0 014.22-1.75 2 2 0 012.33 1.89 1.83 1.83 0 01-1.49 1.83 8.39 8.39 0 00-5.63 4 8.11 8.11 0 00-1.21 5.26 8.59 8.59 0 007 7.61 2 2 0 011.66 1.9v.23a1.64 1.64 0 01-1.84 1.67 12 12 0 01-6.22-2.74 12.24 12.24 0 01-4.27-7.23.18.18 0 00-.18-.15l-3.81.07v.3l.15 9.16c0 .25.09.32.31.39a7.3 7.3 0 015.43 6.09 7.61 7.61 0 01-15 2.58 7.93 7.93 0 015.56-8.71M221.25 871.45c-1.22-.16-2.4-.25-3.56-.46a9.91 9.91 0 01-4.9-2.27 11 11 0 01-3.18-5.35 26.06 26.06 0 01-.91-7.66c0-2.08.17-4.16.27-6.24 0-.35 0-.71.09-1.14l-1.78 1.48a.68.68 0 01-1-.13l-1.12-1.52a.8.8 0 01.12-1.08l5.33-4.46a.91.91 0 011.34.18l4.16 5.86a.73.73 0 01-.13 1l-1.48 1.19a.71.71 0 01-1-.14l-1.24-1.71c-.07.91-.17 1.7-.19 2.5-.06 1.87-.14 3.75-.1 5.62a18.52 18.52 0 001.07 6.21 6.21 6.21 0 004.67 4.15c1.07.24 2.19.3 3.29.44h.19l-.27-15.17-1.37 1.4a.93.93 0 01-1.34 0l-1.15-1.15a.84.84 0 010-1.13l4.71-5.4a.74.74 0 011.12 0l5 5.17a.75.75 0 010 1l-1.34 1.36a.66.66 0 01-1 0l-1.24-1.35-.12.05.27 15.13c.53-.05 1.06-.1 1.59-.17a10.69 10.69 0 003.08-.85 6.47 6.47 0 003.46-4.37 16.13 16.13 0 00.65-4.42c0-1.74 0-3.49-.1-5.23a37.1 37.1 0 00-.45-3.84c-.41.6-.81 1.2-1.23 1.8a.68.68 0 01-1 .17l-1.52-1.18a.73.73 0 01-.15-1l4.2-6.19a.61.61 0 01.9-.15l5.78 4.6a.7.7 0 01.13 1l-1.13 1.65a.61.61 0 01-.9.14l-1.75-1.39c.12 1 .13 1.05.32 3.14.16 1.69.26 3.38.26 5.08a24.6 24.6 0 01-.86 6.94 9.75 9.75 0 01-7 7.1 18.1 18.1 0 01-3.93.63h-.24c0 1.63.06 3.25.09 4.89l5.25-.09a.76.76 0 01.74.76v2a.7.7 0 01-.66.73l-5.32.09v.48c0 1.92.06 3.62.1 5.54a.61.61 0 01-.54.6h-2.14a.64.64 0 01-.58-.62c0-1.93-.06-3.61-.1-5.55v-.41l-5.12.09a.92.92 0 01-.91-.95v-1.53a.92.92 0 01.86-1l5.11-.09zM80.17 676.43h-6.7c-1.2-.06-1.2-.06-1.17 1.18v8h-3.51c-.56 0-.56 0-.56-.54v-8.67h-7.88a1.18 1.18 0 01-1.17-1.18v-1.67a1.17 1.17 0 011.17-1.18h7.85c.09 0 .06-.35.06-.47v-7.82c0-.35-.08-.43-.43-.48a18.28 18.28 0 01-10.06-4.71 18.56 18.56 0 01-5.84-10.42 10.53 10.53 0 01-.3-2.76c0-.84.38-.74.4-.83h2.58a1.05 1.05 0 011 1 14.65 14.65 0 006 11 14.12 14.12 0 009.73 2.83A14.83 14.83 0 0084.92 646a1.18 1.18 0 011.17-1.09h1.65a1.18 1.18 0 011.17 1.27 18.83 18.83 0 01-15.64 17.38 1.16 1.16 0 00-.94 1.15v6.47c0 1.3 0 1.18 1.17 1.18h6.67a1.18 1.18 0 011.17 1.19v1.69a1.18 1.18 0 01-1.17 1.19" />
      <path d="M70.35 652.61a7.79 7.79 0 10-7.68-7.79 7.75 7.75 0 007.69 7.79m-11.74-7.76a11.76 11.76 0 1123.51.06 11.76 11.76 0 11-23.51-.06M82.41 327.11v-31a.69.69 0 00-1.19-.51l-12.08 12.62a.68.68 0 01-1 0l-.88-.79a.75.75 0 010-1.06l15.88-16.76a.67.67 0 011 0l15.91 16.78a.76.76 0 010 1.07l-.84.75a.68.68 0 01-1 0l-12-12.63a.69.69 0 00-1.19.51v31a.71.71 0 01-.69.73h-1.22a.72.72 0 01-.7-.73M235.86 108v31a.69.69 0 001.19.51l12.08-12.61a.69.69 0 01.95 0l.88.79a.76.76 0 010 1.07l-15.88 16.75a.67.67 0 01-1 0l-15.91-16.78a.75.75 0 010-1.06l.84-.76a.69.69 0 01.95 0c4 4.21 8 8.41 12.05 12.63a.69.69 0 001.19-.51V108a.71.71 0 01.69-.73h1.19a.71.71 0 01.69.73" />
    </g>
    <path
      fill="none"
      stroke="#1d1d1b"
      stroke-width="6"
      d="M926.55 744.29L495.96 500.67"
    />
    <path
      fill="none"
      stroke="#000"
      stroke-width=".334"
      d="M498.73 500.03l438.84-228.44M499.86 502.21L938.7 273.77M500.97 504.34L939.81 275.9"
    />
    <g clip-path="url(#b)">
      <path
        d="M498.67 539a38.18 38.18 0 10-38.18-38.18A38.17 38.17 0 00498.67 539"
        fill="#fff"
      />
      <circle
        cx="498.61"
        cy="500.86"
        r="38.17"
        fill="none"
        stroke="#1d1d1b"
        stroke-width="2"
      />
    </g>
    <path
      d="M498.84 501V4.91c272.01 0 495.83 223.92 495.83 496.09a496.21 496.21 0 01-64.41 244.5z"
      fill="#0ff"
      opacity=".4"
    />
    <path
      d="M499.61 498.81L933.3 744.6c-134.84 237.92-441.57 322.74-679.48 187.91a498.56 498.56 0 01-195.1-201.06z"
      fill="#f0f"
      opacity=".4"
    />
    <path
      d="M498.5 501.78L54.81 729A498.55 498.55 0 010 501.78C0 228.31 225 3.28 498.5 3.28z"
      fill="#f15a24"
      opacity=".4"
    />
  </svg>
);

export default TemplateChartComp;
