import styled from 'styled-components'
import {  } from './_consts'

export const WolflowPieChartOneContainer = styled.div`
  .pie {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #28e070;
    background-image: linear-gradient(to right, transparent 50%, #8D1414 0);
  }
  .pie:after,
  .pie:before {
    content: '';
    position: absolute;
    display: block;
    margin-left: 50%;
    width: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 50%;
    background-color: #146B36;
    transform-origin: left;
  }
  .pie:after {
    background-color: #f66461;
  }
  .pie-val {
    position: absolute;
    top: 30px;
    bottom: 30px;
    left: 30px;
    right: 30px;
    z-index: 2;
    border-radius: 50%;
    background-color: #fff;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    line-height: 140px;
    color: #0081cc;
  }
  .pie[data-value="1"]:before {
    transform: rotate(3.6deg);
  }
  .pie[data-value="1"]:after {
    display: none;
  }
  .pie[data-value="2"]:before {
    transform: rotate(7.2deg);
  }
  .pie[data-value="2"]:after {
    display: none;
  }
  .pie[data-value="3"]:before {
    transform: rotate(10.8deg);
  }
  .pie[data-value="3"]:after {
    display: none;
  }
  .pie[data-value="4"]:before {
    transform: rotate(14.4deg);
  }
  .pie[data-value="4"]:after {
    display: none;
  }
  .pie[data-value="5"]:before {
    transform: rotate(18deg);
  }
  .pie[data-value="5"]:after {
    display: none;
  }
  .pie[data-value="6"]:before {
    transform: rotate(21.6deg);
  }
  .pie[data-value="6"]:after {
    display: none;
  }
  .pie[data-value="7"]:before {
    transform: rotate(25.2deg);
  }
  .pie[data-value="7"]:after {
    display: none;
  }
  .pie[data-value="8"]:before {
    transform: rotate(28.8deg);
  }
  .pie[data-value="8"]:after {
    display: none;
  }
  .pie[data-value="9"]:before {
    transform: rotate(32.4deg);
  }
  .pie[data-value="9"]:after {
    display: none;
  }
  .pie[data-value="10"]:before {
    transform: rotate(36deg);
  }
  .pie[data-value="10"]:after {
    display: none;
  }
  .pie[data-value="11"]:before {
    transform: rotate(39.6deg);
  }
  .pie[data-value="11"]:after {
    display: none;
  }
  .pie[data-value="12"]:before {
    transform: rotate(43.2deg);
  }
  .pie[data-value="12"]:after {
    display: none;
  }
  .pie[data-value="13"]:before {
    transform: rotate(46.8deg);
  }
  .pie[data-value="13"]:after {
    display: none;
  }
  .pie[data-value="14"]:before {
    transform: rotate(50.4deg);
  }
  .pie[data-value="14"]:after {
    display: none;
  }
  .pie[data-value="15"]:before {
    transform: rotate(54deg);
  }
  .pie[data-value="15"]:after {
    display: none;
  }
  .pie[data-value="16"]:before {
    transform: rotate(57.6deg);
  }
  .pie[data-value="16"]:after {
    display: none;
  }
  .pie[data-value="17"]:before {
    transform: rotate(61.2deg);
  }
  .pie[data-value="17"]:after {
    display: none;
  }
  .pie[data-value="18"]:before {
    transform: rotate(64.8deg);
  }
  .pie[data-value="18"]:after {
    display: none;
  }
  .pie[data-value="19"]:before {
    transform: rotate(68.4deg);
  }
  .pie[data-value="19"]:after {
    display: none;
  }
  .pie[data-value="20"]:before {
    transform: rotate(72deg);
  }
  .pie[data-value="20"]:after {
    display: none;
  }
  .pie[data-value="21"]:before {
    transform: rotate(75.6deg);
  }
  .pie[data-value="21"]:after {
    display: none;
  }
  .pie[data-value="22"]:before {
    transform: rotate(79.2deg);
  }
  .pie[data-value="22"]:after {
    display: none;
  }
  .pie[data-value="23"]:before {
    transform: rotate(82.8deg);
  }
  .pie[data-value="23"]:after {
    display: none;
  }
  .pie[data-value="24"]:before {
    transform: rotate(86.4deg);
  }
  .pie[data-value="24"]:after {
    display: none;
  }
  .pie[data-value="25"]:before {
    transform: rotate(90deg);
  }
  .pie[data-value="25"]:after {
    display: none;
  }
  .pie[data-value="26"]:before {
    transform: rotate(93.6deg);
  }
  .pie[data-value="26"]:after {
    display: none;
  }
  .pie[data-value="27"]:before {
    transform: rotate(97.2deg);
  }
  .pie[data-value="27"]:after {
    display: none;
  }
  .pie[data-value="28"]:before {
    transform: rotate(100.8deg);
  }
  .pie[data-value="28"]:after {
    display: none;
  }
  .pie[data-value="29"]:before {
    transform: rotate(104.4deg);
  }
  .pie[data-value="29"]:after {
    display: none;
  }
  .pie[data-value="30"]:before {
    transform: rotate(108deg);
  }
  .pie[data-value="30"]:after {
    display: none;
  }
  .pie[data-value="31"]:before {
    transform: rotate(111.6deg);
  }
  .pie[data-value="31"]:after {
    display: none;
  }
  .pie[data-value="32"]:before {
    transform: rotate(115.2deg);
  }
  .pie[data-value="32"]:after {
    display: none;
  }
  .pie[data-value="33"]:before {
    transform: rotate(118.8deg);
  }
  .pie[data-value="33"]:after {
    display: none;
  }
  .pie[data-value="34"]:before {
    transform: rotate(122.4deg);
  }
  .pie[data-value="34"]:after {
    display: none;
  }
  .pie[data-value="35"]:before {
    transform: rotate(126deg);
  }
  .pie[data-value="35"]:after {
    display: none;
  }
  .pie[data-value="36"]:before {
    transform: rotate(129.6deg);
  }
  .pie[data-value="36"]:after {
    display: none;
  }
  .pie[data-value="37"]:before {
    transform: rotate(133.2deg);
  }
  .pie[data-value="37"]:after {
    display: none;
  }
  .pie[data-value="38"]:before {
    transform: rotate(136.8deg);
  }
  .pie[data-value="38"]:after {
    display: none;
  }
  .pie[data-value="39"]:before {
    transform: rotate(140.4deg);
  }
  .pie[data-value="39"]:after {
    display: none;
  }
  .pie[data-value="40"]:before {
    transform: rotate(144deg);
  }
  .pie[data-value="40"]:after {
    display: none;
  }
  .pie[data-value="41"]:before {
    transform: rotate(147.6deg);
  }
  .pie[data-value="41"]:after {
    display: none;
  }
  .pie[data-value="42"]:before {
    transform: rotate(151.2deg);
  }
  .pie[data-value="42"]:after {
    display: none;
  }
  .pie[data-value="43"]:before {
    transform: rotate(154.8deg);
  }
  .pie[data-value="43"]:after {
    display: none;
  }
  .pie[data-value="44"]:before {
    transform: rotate(158.4deg);
  }
  .pie[data-value="44"]:after {
    display: none;
  }
  .pie[data-value="45"]:before {
    transform: rotate(162deg);
  }
  .pie[data-value="45"]:after {
    display: none;
  }
  .pie[data-value="46"]:before {
    transform: rotate(165.6deg);
  }
  .pie[data-value="46"]:after {
    display: none;
  }
  .pie[data-value="47"]:before {
    transform: rotate(169.2deg);
  }
  .pie[data-value="47"]:after {
    display: none;
  }
  .pie[data-value="48"]:before {
    transform: rotate(172.8deg);
  }
  .pie[data-value="48"]:after {
    display: none;
  }
  .pie[data-value="49"]:before {
    transform: rotate(176.4deg);
  }
  .pie[data-value="49"]:after {
    display: none;
  }
  .pie[data-value="50"]:before {
    transform: rotate(180deg);
  }
  .pie[data-value="50"]:after {
    display: none;
  }
  .pie[data-value="51"]:after {
    transform: rotate(3.6deg);
  }
  .pie[data-value="51"]:before {
    display: none;
  }
  .pie[data-value="52"]:after {
    transform: rotate(7.2deg);
  }
  .pie[data-value="52"]:before {
    display: none;
  }
  .pie[data-value="53"]:after {
    transform: rotate(10.8deg);
  }
  .pie[data-value="53"]:before {
    display: none;
  }
  .pie[data-value="54"]:after {
    transform: rotate(14.4deg);
  }
  .pie[data-value="54"]:before {
    display: none;
  }
  .pie[data-value="55"]:after {
    transform: rotate(18deg);
  }
  .pie[data-value="55"]:before {
    display: none;
  }
  .pie[data-value="56"]:after {
    transform: rotate(21.6deg);
  }
  .pie[data-value="56"]:before {
    display: none;
  }
  .pie[data-value="57"]:after {
    transform: rotate(25.2deg);
  }
  .pie[data-value="57"]:before {
    display: none;
  }
  .pie[data-value="58"]:after {
    transform: rotate(28.8deg);
  }
  .pie[data-value="58"]:before {
    display: none;
  }
  .pie[data-value="59"]:after {
    transform: rotate(32.4deg);
  }
  .pie[data-value="59"]:before {
    display: none;
  }
  .pie[data-value="60"]:after {
    transform: rotate(36deg);
  }
  .pie[data-value="60"]:before {
    display: none;
  }
  .pie[data-value="61"]:after {
    transform: rotate(39.6deg);
  }
  .pie[data-value="61"]:before {
    display: none;
  }
  .pie[data-value="62"]:after {
    transform: rotate(43.2deg);
  }
  .pie[data-value="62"]:before {
    display: none;
  }
  .pie[data-value="63"]:after {
    transform: rotate(46.8deg);
  }
  .pie[data-value="63"]:before {
    display: none;
  }
  .pie[data-value="64"]:after {
    transform: rotate(50.4deg);
  }
  .pie[data-value="64"]:before {
    display: none;
  }
  .pie[data-value="65"]:after {
    transform: rotate(54deg);
  }
  .pie[data-value="65"]:before {
    display: none;
  }
  .pie[data-value="66"]:after {
    transform: rotate(57.6deg);
  }
  .pie[data-value="66"]:before {
    display: none;
  }
  .pie[data-value="67"]:after {
    transform: rotate(61.2deg);
  }
  .pie[data-value="67"]:before {
    display: none;
  }
  .pie[data-value="68"]:after {
    transform: rotate(64.8deg);
  }
  .pie[data-value="68"]:before {
    display: none;
  }
  .pie[data-value="69"]:after {
    transform: rotate(68.4deg);
  }
  .pie[data-value="69"]:before {
    display: none;
  }
  .pie[data-value="70"]:after {
    transform: rotate(72deg);
  }
  .pie[data-value="70"]:before {
    display: none;
  }
  .pie[data-value="71"]:after {
    transform: rotate(75.6deg);
  }
  .pie[data-value="71"]:before {
    display: none;
  }
  .pie[data-value="72"]:after {
    transform: rotate(79.2deg);
  }
  .pie[data-value="72"]:before {
    display: none;
  }
  .pie[data-value="73"]:after {
    transform: rotate(82.8deg);
  }
  .pie[data-value="73"]:before {
    display: none;
  }
  .pie[data-value="74"]:after {
    transform: rotate(86.4deg);
  }
  .pie[data-value="74"]:before {
    display: none;
  }
  .pie[data-value="75"]:after {
    transform: rotate(90deg);
  }
  .pie[data-value="75"]:before {
    display: none;
  }
  .pie[data-value="76"]:after {
    transform: rotate(93.6deg);
  }
  .pie[data-value="76"]:before {
    display: none;
  }
  .pie[data-value="77"]:after {
    transform: rotate(97.2deg);
  }
  .pie[data-value="77"]:before {
    display: none;
  }
  .pie[data-value="78"]:after {
    transform: rotate(100.8deg);
  }
  .pie[data-value="78"]:before {
    display: none;
  }
  .pie[data-value="79"]:after {
    transform: rotate(104.4deg);
  }
  .pie[data-value="79"]:before {
    display: none;
  }
  .pie[data-value="80"]:after {
    transform: rotate(108deg);
  }
  .pie[data-value="80"]:before {
    display: none;
  }
  .pie[data-value="81"]:after {
    transform: rotate(111.6deg);
  }
  .pie[data-value="81"]:before {
    display: none;
  }
  .pie[data-value="82"]:after {
    transform: rotate(115.2deg);
  }
  .pie[data-value="82"]:before {
    display: none;
  }
  .pie[data-value="83"]:after {
    transform: rotate(118.8deg);
  }
  .pie[data-value="83"]:before {
    display: none;
  }
  .pie[data-value="84"]:after {
    transform: rotate(122.4deg);
  }
  .pie[data-value="84"]:before {
    display: none;
  }
  .pie[data-value="85"]:after {
    transform: rotate(126deg);
  }
  .pie[data-value="85"]:before {
    display: none;
  }
  .pie[data-value="86"]:after {
    transform: rotate(129.6deg);
  }
  .pie[data-value="86"]:before {
    display: none;
  }
  .pie[data-value="87"]:after {
    transform: rotate(133.2deg);
  }
  .pie[data-value="87"]:before {
    display: none;
  }
  .pie[data-value="88"]:after {
    transform: rotate(136.8deg);
  }
  .pie[data-value="88"]:before {
    display: none;
  }
  .pie[data-value="89"]:after {
    transform: rotate(140.4deg);
  }
  .pie[data-value="89"]:before {
    display: none;
  }
  .pie[data-value="90"]:after {
    transform: rotate(144deg);
  }
  .pie[data-value="90"]:before {
    display: none;
  }
  .pie[data-value="91"]:after {
    transform: rotate(147.6deg);
  }
  .pie[data-value="91"]:before {
    display: none;
  }
  .pie[data-value="92"]:after {
    transform: rotate(151.2deg);
  }
  .pie[data-value="92"]:before {
    display: none;
  }
  .pie[data-value="93"]:after {
    transform: rotate(154.8deg);
  }
  .pie[data-value="93"]:before {
    display: none;
  }
  .pie[data-value="94"]:after {
    transform: rotate(158.4deg);
  }
  .pie[data-value="94"]:before {
    display: none;
  }
  .pie[data-value="95"]:after {
    transform: rotate(162deg);
  }
  .pie[data-value="95"]:before {
    display: none;
  }
  .pie[data-value="96"]:after {
    transform: rotate(165.6deg);
  }
  .pie[data-value="96"]:before {
    display: none;
  }
  .pie[data-value="97"]:after {
    transform: rotate(169.2deg);
  }
  .pie[data-value="97"]:before {
    display: none;
  }
  .pie[data-value="98"]:after {
    transform: rotate(172.8deg);
  }
  .pie[data-value="98"]:before {
    display: none;
  }
  .pie[data-value="99"]:after {
    transform: rotate(176.4deg);
  }
  .pie[data-value="99"]:before {
    display: none;
  }
  .pie[data-value="100"]:after {
    transform: rotate(180deg);
  }
  .pie[data-value="100"]:before {
    display: none;
  }
`