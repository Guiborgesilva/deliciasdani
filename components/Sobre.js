import { useState } from 'react'
import Modal from 'react-modal'
import styles from '../styles/components/Sobre.module.css'

export default function Sobre(){
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return(
    <>
    <section className={styles.sobre}>
      <img src="bgSobre.svg" />
      <div className={styles.sobreWrapper}>
        <div className={styles.sobreContent}>
          <h2>Um pouco sobre a Dani</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur faucibus imperdiet. Vivamus eget hendrerit eros, nec porttitor turpis. Quisque porta dictum diam nec tincidunt. Suspendisse potenti. Cras ut neque id enim scelerisque ultricies.
          </p>
          <button
            className={styles.sobreCTA}
            onClick={() => setModalIsOpen(true)}>
            SAIBA MAIS
          </button>
          <div className={styles.modal}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              ariaHideApp={false}
              style={
                {
                  overlay:{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                  },
                  content:{
                    width: '300px',
                    height: '410px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    paddingLeft: '1.5%',
                    paddingRight: '1.5%',
                    borderRadius: '5px'
                  }
                }
              }
            >
              <div className={styles.modalWrapper}>
                <h2>Sobre a Dani</h2>
                <p>
                  In aute exercitation quis et dolore in pariatur non ad officia. Eiusmod esse pariatur duis duis enim in ut. Cillum mollit consectetur pariatur in. Mollit labore veniam est pariatur laborum cupidatat eu ea ea fugiat quis. Qui magna deserunt mollit in exercitation labore labore qui elit qui cillum id. Enim cillum reprehenderit mollit non laboris dolore consequat eu deserunt incididunt consectetur id amet. Cupidatat Lorem ipsum non reprehenderit non tempor minim aute consectetur ut esse nulla.
                </p>
                <button
                  onClick={() => setModalIsOpen(false)}
                  className={styles.btnFechar}
                >
                  Fechar
                </button>
              </div>
            </Modal>
          </div>
        </div>
        <div className={styles.cupcake}>
          <img src="cupcake.png" />
        </div>
      </div>
    </section>
    </>
  )
}