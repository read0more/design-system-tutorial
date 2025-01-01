import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={`container grid ${styles.boxes}`}>
        <div className={`bg-accent text-dark ${styles.box}`}>a</div>
        <div className={`bg-white text-dark ${styles.box}`}>b</div>
        <div className={`bg-accent-alpha text-white ${styles.box}`}>c</div>
        <p className={styles.text}>Hello, world!</p>
      </div>
      <section className='flow'>
        <div className='div'>1</div>
        <div className='div'>2</div>
        <div className='div'>3</div>
        <div className='div'>4</div>
      </section>
      <a
        href='#'
        className='large-button uppercase font-serif font-size-600 text-dark bg-white'
      >
        Explore
      </a>
      <div className='dot-indicators flex'>
        <button type='button' aria-selected='true'>
          <span className='screen-reader-only'>Slide title</span>
        </button>
        <button type='button' aria-selected='false'>
          <span className='screen-reader-only'>Slide title</span>
        </button>
        <button type='button' aria-selected='false'>
          <span className='screen-reader-only'>Slide title</span>
        </button>
      </div>
      <div role='tablist' aria-label='Example Tabs'>
        <button
          id='tab1'
          role='tab'
          aria-controls='panel1'
          aria-selected='true'
        >
          Tab 1
        </button>
        <button
          id='tab2'
          role='tab'
          aria-controls='panel2'
          aria-selected='false'
        >
          Tab 2
        </button>
        <button
          id='tab3'
          role='tab'
          aria-controls='panel3'
          aria-selected='false'
        >
          Tab 3
        </button>
      </div>

      <div id='panel1' role='tabpanel' aria-labelledby='tab1'>
        Content for Tab 1
      </div>
      <div id='panel2' role='tabpanel' aria-labelledby='tab2' hidden>
        Content for Tab 2
      </div>
      <div id='panel3' role='tabpanel' aria-labelledby='tab3' hidden>
        Content for Tab 3
      </div>
    </>
  );
}

export default App;
