// import ECharts from 'vue-echarts'
// import {blueBed} from '@/assets/base64/imgBase64.js'
// 获取echars单条柱状图
// 生成单层柱状图数据
export const getEcharsSingleBarOptions = () => {
  let barOptions = {
    grid: {
      left: '8%',
      right: '8%',
      bottom: '8%',
      top: '18%',
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    yAxis: {
      type: 'value',
      name: '人/次',
      splitLine: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#2575fc'
        }
      },
      axisLabel: {
        color: 'rgb(142, 146, 169)'
      },
      nameTextStyle: {
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      }
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#2575fc'
        }
      },
      axisLabel: {
        rotate: -20,
        color: 'rgb(142, 146, 169)'
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
      data: []
    },
    series: [
      {
        name: '',
        type: 'bar',
        itemStyle: {
          normal: {
            show: true,
            color: 'rgb(40, 178, 255)',
            // barBorderRadius: [50, 50, 0, 0],
            borderWidth: 0,
            borderColor: '#333'
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#fff'
            }
          }
        },
        barWidth: '30%',
        data: []
      }
    ]
  }
  return barOptions
}

// 获取echars南丁格尔图
export const getEcharsNightingaleOptions = () => {
  let barOption = {
    title: {
      text: '触点活性',
      subtext: '',
      x: 'center',
      y: 'center',
      textStyle: {
        color: '#fff',
        fontSize: '16'
      },
      subtextStyle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: '20'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        debugger
        let result = ''
        result += params.name + '：' + params.value
        return result
      }
    },
    // legend: {
    //   bottom: '5%',
    //   left: 'center',
    //   itemHeight: 10,
    //   itemWidth: 10,
    //   borderRadius: 10
    // },
    // toolbox: {
    //   show: true,
    //   feature: {
    //     mark: {show: true},
    //     dataView: {show: true, readOnly: false},
    //     magicType: {
    //       show: true,
    //       type: ['funnel']
    //     },
    //     restore: {show: true},
    //     saveAsImage: {show: true}
    //   }
    // },
    calculable: true,
    series: [
      {
        type: 'pie',
        radius: ['50%', '80%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          // normal: {
          //   shadowColor: 'rgba(0, 0, 0, 0.5)',
          //   shadowBlur: 3
          // }
        },
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        // label: {
        //   normal: {
        //     textStyle: {
        //       fontSize: 14
        //     },
        //     formatter: '{b}\n{c}%'
        //   }
        // },
        // labelLine: {
        //   normal: {
        //     smooth: true,
        //     lineStyle: {
        //       width: 2
        //     }
        //   }
        // },
        data: [],
        color: []
      }
    ]
  }
  return barOption
}

// 获取echars 折线图表参数
export const getEcharsMultiLineOptions = () => {
  let multiLineOptions = {
    color: ['#f53f8c', '#35d0e9'],
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    grid: {
      left: '15%',
      top: '20%',
      bottom: '18%',
      right: '18%'
    },
    // legend: {
    //   left: '30%',
    //   top: '2%',
    //   textStyle: {
    //     color: '#898CA0',
    //     fontSize: 12
    //   },
    //   data: ['目标', '实际']
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#4b7394'
        }
      },
      axisLabel: {
        color: '#4b7394'
      },
      data: []
    },
    yAxis: {
      type: 'value',
      // axisTick: {
      //   show: false
      // },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#4b7394'
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
        // color: '#4b7394'
      }
    },
    series: [
      {
        name: '',
        type: 'line',
        smooth: true,
        symbolSize: 0.1,
        data: [],
        color: '#1D68ED',
        areaStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0, color: 'rgba(29,104,237,0.42)'
                },
                {
                  offset: 1, color: 'rgba(29,104,237,0)'
                }
              ]
            }
          }
        }
      }
    ]
  }
  return multiLineOptions
}

// 获取echars多条折线图表参数(x轴可伸缩)
export const getBroadwiseLineOptions = () => {
  let multiLineOptions = {
    color: ['#f53f8c', '#35d0e9'],
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    grid: {
      left: '14%',
      top: '20%',
      bottom: '18%',
      right: '8%'
    },
    legend: {
      left: '30%',
      top: '2%',
      textStyle: {
        color: '#898CA0',
        fontSize: 12
      },
      data: ['目标', '实际']
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#DCDCDC'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        // rotate: -30,
        color: '#B4B6C1'
      },
      nameTextStyle: {
        color: '#2575fc'
      },
      nameGap: 10,
      data: []
    },
    calculable: true,
    yAxis: {
      type: 'value',
      name: '万元',
      color: '#B4B6C1',
      axisLine: {
        lineStyle: {
          color: '#DCDCDC'
        }
      },
      axisLabel: {
        color: '#B4B6C1'
      },
      // axisTick: {
      //   show: false
      // },
      // splitArea: {
      //   show: false
      // },
      nameTextStyle: {
        color: '#B4B6C1'
      },
      splitNumber: 4
    },
    dataZoom: [{
      show: true,
      height: 10,
      xAxisIndex: [
        0
      ],
      bottom: 10,
      start: 0,
      end: 20,
      handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
      handleSize: '110%',
      handleStyle: {
        color: '#d3dee5'
      },
      textStyle: {
        color: '#B4B6C1'
      },
      borderColor: '#90979c'
    },
    {
      type: 'inside',
      show: true,
      height: 15,
      start: 1,
      end: 35
    }],
    series: [
      {
        name: '目标',
        type: 'line',
        smooth: true,
        symbolSize: 0.1,
        data: [],
        color: '#D8DCE3'
      },
      {
        name: '实际',
        type: 'line',
        smooth: true,
        symbolSize: 0.1,
        data: [],
        color: '#1D68ED',
        areaStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0, color: 'rgba(29,104,237,0.42)'
                },
                {
                  offset: 1, color: 'rgba(29,104,237,0)'
                }
              ]
            }
          }
        }
      }
    ]
  }
  return multiLineOptions
}

// 获取echars 多条折线图表参数(横向)
export const getEcharsMultiBroadwiseLineOptions = () => {
  let multiLineOptions = {
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: '#fff'
        },
        emphasis: {
          borderColor: '#b1e4ff'
        }
      },
      feature: {
        dataZoom: {},
        brush: {
          type: ['rect', 'polygon', 'clear']
        },
        saveAsImage: {
          show: true
        }
      }
    },
    // tooltip: {
    //   trigger: 'item'
    // },
    // grid: {
    //   right: 40,
    //   top: 100,
    //   bottom: 40,
    //   width: '30%'
    // },
    xAxis: {
      type: 'value',
      scale: true,
      position: 'top',
      boundaryGap: false,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 2,
        textStyle: {
          color: '#aaa'
        }
      }
    },
    yAxis: {
      type: 'category',
      //  name: 'TOP 20',
      nameGap: 16,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#ddd'
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#ddd'
        }
      },
      data: []
    },
    series: [{
      type: 'line',
      symbol: 'none',
      itemStyle: {
        normal: {
          color: '#ddb926'
        }
      },
      data: []
    },
    {
      type: 'line',
      symbol: 'none',
      itemStyle: {
        normal: {
          color: '#ddb926'
        }
      },
      data: []
    }]
  }
  return multiLineOptions
}

// 雷达图
export const getRadarOptions = () => {
  let radarOptions = {
    title: {
      // text: 'Multiple Radar'
    },
    color: ['#1fcdff'],
    // tooltip: {
    //   trigger: 'axis',
    //   backgroundColor: '#072d53',
    //   textStyle: {
    //     color: '#fff'
    //   },
    //   borderColor: '#1fcdff'
    // },
    // legend: {
    //   left: 'center',
    //   data: [
    //     'A Software',
    //     'A Phone',
    //     'Another Phone',
    //     'Precipitation',
    //     'Evaporation'
    //   ]
    // },
    radar: [
      {
        indicator: [],
        center: ['50%', '50%'],
        radius: 80,
        splitArea: {
          areaStyle: {
            color: ['transparent', '#062a3f'],
            // shadowColor: 'rgba(0, 0, 0, 0.2)',
            // shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: '#0b658e'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#0b658e'
          }
        },
        axisName: {
          color: '#1fcdff'
        },
        axisLabel: {
          backgroundColor: '#072d53'
        }
      }
    ],
    series: [
      {
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        areaStyle: {
          normal: {
            color: {
              // type: 'linear',
              // x: 0,
              // y: 0,
              // x2: 0,
              // y2: 1,
              colorStops: [
                {
                  offset: 0, color: '#2af598'
                },
                {
                  offset: 1, color: '#009efd'
                }
              ]
            }
          }
        },
        label: {
          backgroundColor: '#072d53'
        },
        data: [
          {
            value: [60, 73, 85, 40],
            name: '',
            label: {
              show: false
            }
            // areaStyle: {
            //   normal: {
            //     color: {
            //       // type: 'linear',
            //       // x: 0,
            //       // y: 0,
            //       // x2: 0,
            //       // y2: 1,
            //       colorStops: [
            //         {
            //           offset: 0, color: 'rgba(70,174,247,0.42)'
            //         },
            //         {
            //           offset: 1, color: 'rgba(70,174,247,0)'
            //         }
            //       ]
            //     }
            //   }
            // }
          }
        ]
      }
    ]
  }
  return radarOptions
}