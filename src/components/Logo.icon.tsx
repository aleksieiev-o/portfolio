import React, {FC, ReactElement} from 'react';

interface Props {
  height: string;
}

/* eslint-disable */
const LogoIcon: FC<Props> = (props): ReactElement => {
  const {height} = props;

  return (
    <svg version="1.1" id="Layer_1" x="0px" y="0px" width={'100%'} height={height} viewBox="412.209 270.875 173.376 205.362" enableBackground="new 0 0 992 736" xmlns="http://www.w3.org/2000/svg">
      <path
        className={'fill-foreground'}
        opacity="1.000000"
        stroke="none"
        d=" M424.148987,314.274323 C441.287476,286.363892 466.218933,271.503082 498.319244,271.226471 C545.134949,270.823059 579.211731,305.906281 584.362610,344.590271 C589.086853,380.070831 576.419312,408.222809 547.577148,429.093201 C543.862000,431.781433 543.070801,433.618256 545.296387,437.840546 C551.350769,449.326630 556.825928,461.118134 562.523804,472.791901 C563.165466,474.106445 563.968689,475.387756 563.761475,477.534332 C557.644653,478.476624 551.549255,478.071564 545.481934,477.799774 C543.340210,477.703796 542.692627,475.659454 541.888062,474.020691 C537.044312,464.154694 532.133118,454.320709 527.411255,444.396606 C525.992249,441.414215 524.529297,440.265228 520.948364,441.294769 C505.165894,445.832397 489.340179,445.349548 473.740906,440.375885 C470.049835,439.198975 468.382874,440.096649 466.813416,443.423889 C462.053314,453.515106 456.916779,463.428619 452.143158,473.513733 C450.586853,476.801666 448.556732,478.483459 444.834229,478.097382 C439.966614,477.592560 434.946930,478.878204 429.172150,476.899933 C451.592529,431.152954 473.798004,385.844421 495.877625,340.792725 C498.170197,341.022675 498.541504,342.244781 499.035217,343.253662 C507.598785,360.754089 516.041077,378.314972 524.764893,395.734955 C526.583130,399.365601 525.683472,400.983185 522.386169,402.697968 C510.595520,408.829681 510.035583,408.720734 504.111877,396.906616 C501.953888,392.602844 499.797974,388.298004 497.627777,383.967041 C495.145508,384.502808 494.870361,386.539368 494.118134,388.044220 C489.278168,397.726746 484.635651,407.509644 479.680817,417.132111 C477.885590,420.618469 478.553284,422.188904 482.318481,423.115967 C521.525513,432.769714 559.369629,406.901062 565.654236,368.574402 C571.750793,331.393677 546.608215,299.933136 514.962158,292.096710 C476.827026,282.653381 437.201294,309.545258 432.149567,348.582550 C429.755890,367.079681 434.311218,383.544403 445.276764,398.369965 C446.884247,400.543274 447.350830,402.321014 445.958649,404.673981 C443.350098,409.082794 441.812958,414.084839 438.717224,418.267212 C416.606964,401.283539 400.680756,354.755646 424.148987,314.274323 z"/>
    </svg>
  );
};

export default LogoIcon;
