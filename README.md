# React Custom Chart

> A simple custom chart made with create-react-app that displays percentages of input data for any given shapes by path value.

## Table of Contents

- [General Info](#general-information)

- [Technologies Used](#technologies-used)

- [Screenshots](#screenshots)

- [Setup](#setup)

- [Usage](#usage)

- [Room for Improvement](#room-for-improvement)

- [Acknowledgements](#acknowledgements)

- [Contact](#contact)

<!-- * [License](#license) -->

## General Information

- The CustomChart component receives an input dataset and a dataKey to calculate the percentages of these data on the custom chart

## Technologies Used

- Typescript - version 4.1.2

- React - version 17.0.2

## Examples

```js

import  {  CustomChart  }  from  "react-custom-chart"



...



const data = [

{ id: "1", name: "Falls and Psychotropic Medication Use", alertsCount: 5 },

{ id: "2", name: "Confusion and Psychotropic Use", alertsCount: 6 },

{ id: "3", name: "Dizziness", alertsCount: 9 },

{ id: "4", name: "Cardiovascular (Blood Pressure)", alertsCount: 15 },

{ id: "5", name: "Opioid Use", alertsCount: 25 },

{ id: "6", name: "Duplicate Therapies", alertsCount: 26 },

{ id: "7", name: "Duplicate Ingredients", alertsCount: 27 },

]



...



return  <CustomChart

data={data}

dataKey="alertsCount"

clipPath="M79.8764 0.479248C91.9384 0.479248 103.506 5.27084 112.035 13.7999C120.564 22.329 125.356 33.8969 125.356 45.9589C125.356 58.0208 120.564 69.5887 112.035 78.1178C103.506 86.6469 91.9384 91.4385 79.8764 91.4385C67.8145 91.4385 56.2466 86.6469 47.7175 78.1178C39.1884 69.5887 34.3968 58.0208 34.3968 45.9589C34.3968 33.8969 39.1884 22.329 47.7175 13.7999C56.2466 5.27084 67.8145 0.479248 79.8764 0.479248ZM45.7667 114.178H113.986C126.048 114.178 137.616 118.97 146.145 127.499C154.674 136.028 159.466 147.596 159.466 159.658V284.727H125.356V455.275H34.3968V284.727H0.287109V159.658C0.287109 147.596 5.07871 136.028 13.6078 127.499C22.1369 118.97 33.7048 114.178 45.7667 114.178Z"

/>

```

![Example screenshot](https://media.giphy.com/media/qYFZSihVVHleXJrVNq/giphy.gif =750x)

```js

...



return  <CustomChart

data={data}

dataKey="alertsCount"

clipPath="M202.5 45 18.75 492M18.75 492 364.375 494 201.875 44 18.75 492zM202.5 45"

/>

```

![Example screenshot](https://media.giphy.com/media/6JyPO8hqa1GKGoLeQ4/giphy.gif =750x)

```js

...



return  <CustomChart

data={data}

dataKey="alertsCount"

clipPath="M288.1859 158.7006 335.3805 143.334 213.5565 348.2046zM22.5167 138.6756 65.8517 154.368 138.0726 341.9658zM176.6637 16.8264C237.1208 16.8264 272.3126 27.0576 280.9323 33.651 275.1678 38.0628 257.4977 44.0964 228.3485 47.61L228.2661 47.6046 228.1594 47.6334C213.7658 49.3596 196.5978 50.4756 176.6637 50.4756 116.2066 50.4756 81.0149 40.2462 72.3924 33.651 81.0149 27.0576 116.2066 16.8264 176.6637 16.8264M294.1313 54.693 340.1352 124.4664 290.6793 140.5692zM185.27 171.7416 272.9525 161.1936 183.2922 388.8558zM172.6515 171.531 170.6629 389.7792 81.1998 157.392zM63.3258 136.017 17.6148 119.4642 59.373 54.756zM75.5311 127.0062 71.8713 51.7068C77.8667 54.7866 85.9491 57.4308 96.4224 59.7906 103.2926 61.3404 110.8863 62.6634 119.0187 63.7506zM166.9073 153.7056 83.191 140.7636 129.9024 72.819zM179.0438 147.924 141.5867 66.0492C152.7795 66.8682 164.5758 67.302 176.6637 67.302 190.6241 67.302 204.1983 66.7278 216.8951 65.6388zM275.9035 143.946 190.9791 154.1628 229.5351 70.3458zM278.775 122.3442 241.2248 62.7426C246.7665 61.8732 252.0248 60.8904 256.9063 59.7906 267.4742 57.4092 275.6052 54.738 281.6168 51.6222zM356.4891 123.7914 294.5363 29.8278C292.3034 19.6848 280.7028 12.8754 256.9063 7.5114 235.4157 2.6694 206.9186 0 176.6637 0 146.4088 0 117.9117 2.6694 96.4224 7.5114 72.5855 12.8826 60.989 19.7064 58.7844 29.8764L1.5255 118.6002C-.4131 121.6062-.5157 126.009 1.2812 129.168L171.6066 428.8176C171.9495 429.4296 172.3518 429.9732 172.7987 430.4358L172.8095 430.4484 172.8243 430.461 172.827 430.4646 172.8365 430.4736 172.8459 430.4862 172.8581 430.4934C173.0349 430.6752 173.2172 430.839 173.4075 430.9902L173.4088 430.9902 173.421 431.0028 173.4345 431.0118 173.444 431.0208 173.448 431.0262C174.3944 431.7714 175.4906 432.1908 176.634 432.198L176.6637 432.198C177.5642 432.198 178.4336 431.9442 179.2274 431.4726L179.2301 431.4726 179.2449 431.4636 179.2476 431.46C179.8146 431.1216 180.3424 430.6698 180.8136 430.1262L180.8231 430.1118C181.1187 429.7662 181.3914 429.3828 181.6358 428.9652L356.6957 134.5716C358.5897 131.3838 358.5033 126.846 356.4891 123.7914"

/>

```

![Example screenshot](https://media.giphy.com/media/s4i5Ag4T0WggkF39O2/giphy.gif =750x)

<!-- If you have screenshots you'd like to share, include them here. -->

## Setup

Install the library using

`npm i react-custom-chart`

## Usage

How to use it?

| prop         | type                                  | required | defaultValue | description                                                                                                                                                                                                                                                                 |
| ------------ | ------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataKey      | string                                | Yes      |              | The name of the key in the input dataset to calculate the percentages from. Its value can be a numeric string or a number.                                                                                                                                                  |
| clipPath     | string                                | Yes      |              | The clip path that we should use to cut the chart into the desired shape.                                                                                                                                                                                                   |
| labelKey     | string                                | No       | name         | The name of the key in the input dataset for the value labels of each percentages. Its default value is "name".                                                                                                                                                             |
| customColors | boolean                               | No       | false        | A flag indicating if you want to add your custom colors to each record in the dataset. For that, you have to provide a color prop to each record in the dataset containing a hex color string. Its default value is false and random colors are generated for each portion. |
| data         | { [key: string]: string \| number }[] | Yes      |              | The input dataset to calculate the percentages from. Its values can be numeric strings or numbers.                                                                                                                                                                          |

## Room for Improvement

- Multiple new animations

- Allowing for custom styles

- Responsive charts

## Acknowledgements

Giving credit here.

- This project was based on [this article](https://css-tricks.com/clipping-masking-css/).
- You could create or edit your own SVG path value using [this tool](https://yqnn.github.io/svg-path-editor/).

## Contact

Created by [kizofcb](mailto:kizofcb@gmail.com) - feel free to contact me!
