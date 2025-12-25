import { useNameSpace } from '@/composable'
import styles from  './home.module.scss'
// import { TopProducts } from './tsx/top-products'
import { TargetReality } from './tsx/target-reality'

export const Home = () => {
  const ns = useNameSpace(styles,'home')
  return (
    <>
      <div className={ns.b()}>
        {/* <TopProducts /> */}
        <TargetReality />
      </div>
    </>
  )
}
