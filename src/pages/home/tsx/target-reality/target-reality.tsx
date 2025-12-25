import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'
import styles from './target-reality.module.scss'
import { useNameSpace } from '@/composable'

// 模拟数据
const data = [
  { name: 'Jan', reality: 60, target: 80 },
  { name: 'Feb', reality: 45, target: 65 },
  { name: 'Mar', reality: 35, target: 90 },
  { name: 'Apr', reality: 55, target: 65 },
  { name: 'May', reality: 65, target: 100 },
  { name: 'June', reality: 65, target: 100 },
  { name: 'July', reality: 65, target: 100 },
]

// 简单的 SVG 图标组件
const ShoppingBagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
)

const TicketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    <path d="M12 11h.01"></path>
    <path d="M12 15h.01"></path>
  </svg>
)

export const TargetReality = () => {
  const ns = useNameSpace(styles, 'target-reality')
  return (
    <div className={ns.b()}>
      <div className={ns.e('title')}>目标与现实</div>

      <div className={ns.e('chart')}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              dy={10}
            />
            <Bar 
              dataKey="reality" 
              fill="#4AB58E" 
              radius={[4, 4, 4, 4]} 
              barSize={20}
            />
            <Bar 
              dataKey="target" 
              fill="#FFCF00" 
              radius={[4, 4, 4, 4]} 
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={ns.e('legend')}>
        <div className={ns.e('legend-item')}>
          <div className={ns.e('left')}>
            <div className={ns.em('icon-wrapper','green')}>
              <ShoppingBagIcon />
            </div>
            <div className={ns.e('texts')}>
              <span className={ns.e('label')}>现实销售</span>
              <span className={ns.e('sub-label')}>全球的</span>
            </div>
          </div>
          <span className={ns.em('value','green')}>8.823</span>
        </div>

        <div className={ns.e('legend-item')}>
          <div className={ns.e('left')}>
            <div className={ns.em('icon-wrapper','orange')}>
              <TicketIcon />
            </div>
            <div className={ns.e('texts')}>
              <span className={ns.e('label')}>目标销售额</span>
              <span className={ns.e('sub-label')}>商业的</span>
            </div>
          </div>
          <span className={ns.em('value','orange')}>12.122</span>
        </div>
      </div>
    </div>
  )
}
