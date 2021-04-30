import { useState } from 'react'
import Modal from 'react-modal'
import styles from '../styles/components/Sobre.module.css'

export default function Sobre(){
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return(
    <>
    <section className={styles.sobre}>
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
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={
              {
                overlay:{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)'
                },
                content:{
                  width: '400px',
                  height: '560px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }
              }
            }
          >
            <div className={styles.modalWrapper}>
              <h2>Sobre a Dani</h2>
              <p>
                In aute exercitation quis et dolore in pariatur non ad officia. Eiusmod esse pariatur duis duis enim in ut. Cillum mollit consectetur pariatur in. Mollit labore veniam est pariatur laborum cupidatat eu ea ea fugiat quis. Qui magna deserunt mollit in exercitation labore labore qui elit qui cillum id. Enim cillum reprehenderit mollit non laboris dolore consequat eu deserunt incididunt consectetur id amet. Cupidatat Lorem ipsum non reprehenderit non tempor minim aute consectetur ut esse nulla.

                Laborum eu esse ex irure est sunt voluptate eiusmod exercitation. Officia fugiat duis eu laborum officia do mollit consequat amet voluptate. Lorem culpa excepteur ullamco consectetur ad. Sunt magna qui anim est aute qui incididunt.

                Occaecat voluptate minim proident irure magna excepteur dolore dolore cillum labore est. Sint pariatur qui aliqua nulla mollit elit esse dolore enim. Qui cupidatat irure voluptate reprehenderit fugiat est esse aute sint. Veniam laboris nulla amet qui Lorem ullamco cupidatat ex incididunt eu exercitation exercitation.
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
        <div className={styles.cupcake}>
          <img src="cupcake.png" />
        </div>
      </div>
    </section>
    </>
  )
}