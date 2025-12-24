import styles from './top-products.module.scss'

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

export const TopProducts = () => (
  <div className={styles.card}>
    <div className={styles.title}>顶级产品</div>
    <table className={styles.table}>
      <thead>
        <tr className={styles.headRow}>
          <th className={`${styles.cell} ${styles.index}`}><div className={styles.cellInner}>#</div></th>
          <th className={`${styles.cell} ${styles.name}`}><div className={styles.cellInner}>名称</div></th>
          <th className={`${styles.cell} ${styles.pop}`}><div className={styles.cellInner}>人气</div></th>
          <th className={`${styles.cell} ${styles.sales}`}><div className={styles.cellInner}>销售额</div></th>
        </tr>
      </thead>
      <tbody>
        {PRODUCTS.map(p => (
          <tr className={styles.row} key={p.index}>
            <td className={`${styles.cell} ${styles.index}`}><div className={styles.cellInner}>{p.index}</div></td>
            <td className={`${styles.cell} ${styles.name}`}><div className={styles.cellInner}>{p.name}</div></td>
            <td className={`${styles.cell} ${styles.pop}`}>
              <div className={styles.cellInner}>
                <div className={`${styles.progress} ${styles[`tone-${p.tone}`]}`}>
                  <div className={styles.fillBg} style={{ width: `100%` }} />
                  <div className={styles.fill} style={{ width: `${p.percent}%` }} />
                </div>
              </div>
            </td>
            <td className={`${styles.cell} ${styles.sales}`}>
              <div className={styles.cellInner}>
                <span className={`${styles.badge} ${styles[`tone-${p.tone}`]}`}>{p.percent}%</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

