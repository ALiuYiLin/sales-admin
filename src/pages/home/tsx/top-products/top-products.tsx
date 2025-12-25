import styles from './top-products.module.scss'
import { useNameSpace } from '@/composable'

type Product = {
  index: string
  name: string
  percent: number
  tone: 'blue' | 'green' | 'purple' | 'orange'
}

const PRODUCTS: Product[] = [
  { index: '01', name: '家居装饰系列', percent: 45, tone: 'blue' },
  { index: '02', name: "迪士尼公主粉色包包18'", percent: 29, tone: 'green' },
  { index: '03', name: '浴室必备品', percent: 18, tone: 'purple' },
  { index: '04', name: '苹果智能手表', percent: 25, tone: 'orange' },
]

export const TopProducts = () => {
  const { cn, ...ns } = useNameSpace(styles, 'top-products')
  return (
    <div className={ns.b()}>
      <div className={ns.e('title')}>顶级产品</div>
      <table className={ns.e('table')}>
        <thead>
          <tr className={ns.e('head-row')}>
            <th className={cn(ns.e('cell'), ns.e('index'))}><div className={ns.e('cell-inner')}>#</div></th>
            <th className={cn(ns.e('cell'), ns.e('name'))}><div className={ns.e('cell-inner')}>名称</div></th>
            <th className={cn(ns.e('cell'), ns.e('pop'))}><div className={ns.e('cell-inner')}>人气</div></th>
            <th className={cn(ns.e('cell'), ns.e('sales'))}><div className={ns.e('cell-inner')}>销售额</div></th>
          </tr>
        </thead>
        <tbody>
          {PRODUCTS.map(p => (
            <tr className={ns.e('row')} key={p.index}>
              <td className={cn(ns.e('cell'), ns.e('index'))}><div className={ns.e('cell-inner')}>{p.index}</div></td>
              <td className={cn(ns.e('cell'), ns.e('name'))}><div className={ns.e('cell-inner')}>{p.name}</div></td>
              <td className={cn(ns.e('cell'), ns.e('pop'))}>
                <div className={ns.e('cell-inner')}>
                  <div className={cn(ns.e('progress'), ns.em('progress', p.tone))}>
                    <div className={ns.e('fill')} style={{ width: `${p.percent}%` }} />
                    <div className={ns.e('fill-bg')} />
                  </div>
                </div>
              </td>
              <td className={cn(ns.e('cell'), ns.e('sales'))}>
                <div className={ns.e('cell-inner')}>
                  <span className={cn(ns.e('badge'), ns.em('badge', p.tone))}>{p.percent}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

