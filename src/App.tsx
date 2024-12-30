import styles from './App.module.scss'

function App() {

  return (
    <div className={`container grid ${styles.boxes}`}>
      <div className={`bg-accent text-dark ${styles.box}`}>a</div>
      <div className={`bg-white text-dark ${styles.box}`}>b</div>
      <div className={`bg-accent-alpha text-white ${styles.box}`}>c</div>
      <p className={styles.text}>Hello, world!</p>
    </div>
  )
}

export default App
