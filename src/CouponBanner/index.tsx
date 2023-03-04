import React, { useEffect, useRef, useState } from "react";
import './index.css'

interface TimerViewProps {
  h: string
  m: string
  s: string
}

type Props = {
  // 标题
  title?: String | null
}


const CouponBanner: React.FC<Props> = (props: Props) => {
  const { title } = props
  const bottomContent = [
    {
      content: 111,
      style: {
        fontSize: 20,
        color: 'black'
      }
    },
    {
      content: 222,
      style: {
        fontSize: 18,
        color: '#999'
      }
    },
    {
      content: 333,
      hasClass: true
    },
  ]

  // 定时器
  const timerRef = useRef<NodeJS.Timeout>()
  // 显示的数据 
  const [timerView, setTimerView] = useState<TimerViewProps | null>({
    h: '24',
    m: '60',
    s: '60'
  })
  // 初始值
  const [timers, setTimers] = useState(24 * 60 * 60 * 1000 - 1)

  // 倒计时的代码
  useEffect(() => {
    if (timers && timers !== 0) {
      timerRef.current = setTimeout(() => {
        setTimers(timer => timer - 1)
        const h = parseInt(`${(timers / 60 / 60) % 24}`)
        const m = parseInt(`${(timers / 60) % 60}`)
        const s = parseInt(`${timers % 60}`)
        setTimerView({
          h: h < 10 ? `0${h}` : `${h}`,
          m: m < 10 ? `0${m}` : `${m}`,
          s: s < 10 ? `0${s}` : `${s}`
        })
      }, 1000);
    }
    // 组件卸载时清除定时器
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [timers])

  return (
    <div className="wrapContent">
      <div className="title">{title}</div>
      <div className="content">
        <div className="content1" />
        <div className="right">
          <div className="timer">
            Ends in
            <div className="h" style={{ marginLeft: 10 }}>{timerView?.h}</div>
            <div className="unit">h</div>
            <div className="h">{timerView?.m}</div>
            <div className="unit">m</div>
            <div className="h">{timerView?.s}</div>
            <div className="unit">s</div>
          </div>
          <div className="bottom">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '30%' }}>
              <span style={{ fontSize: 30, color: 'black' }}>30%</span>
              <span style={{ fontSize: 15, color: 'black' }}>OFF</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flex: 1, alignItems: 'flex-start' }}>
              {bottomContent.map((item, index) => {
                return (
                  <span key={index} style={item.style} className={item.hasClass ? 'spanContent' : 'noSpanContent'}>
                    {item.content}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default CouponBanner