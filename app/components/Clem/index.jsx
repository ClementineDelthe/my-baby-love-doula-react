import { Animator, MoveIn, MoveOut } from 'react-scroll-motion';

const Clem = () => {
  return (
    <div className="section-3 text-center text-xl">
      <h2>
        <Animator animation={MoveIn(-1000, 0)}>Adrénaline et Liberté ✅</Animator>
        <Animator animation={MoveIn(1000, 0)}>Des paysages à couper le souffle ✅</Animator>
        <Animator animation={MoveIn(-1000, 0)}>⚠️ Permis bateau obligatoire ⚠️</Animator>
        <Animator animation={MoveIn(1000, 0)}>Une aventure en famille ou entre amis ✅</Animator>
        <Animator animation={MoveIn(-1000, 0)}>Un service client dévoué ✅</Animator>
      </h2>
    </div>
  )
}

export default Clem
