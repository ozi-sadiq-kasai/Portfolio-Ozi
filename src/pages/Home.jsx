const Home = () => {
  return (
    <div className="bg-light-army max-sm:w-full font-semibold text-charcol max-sm:px-6 md:px-20 md:pt-20">
      <section className="max-sm:pt-10">
        <h1 className="w-full">
          <span className="text-3xl">🖐🏻</span>
          <br /> My name is
          <span className="text-yellow-500 text-4xl max-w-screen-sm:max-sm:w-1/2">
            {' '}
            Ozi Kasai
          </span>
        </h1>
        <p className="max-sm:pt-6 max-sm:text-center text-lg">
          A Frontend Developer{' '}
        </p>
      </section>

      <section>
        <h2 className="text-2xl text-center mt-3 text-army">Skills</h2>
        <ul className="gap-3  grid grid-cols-3 text-center text-light-army font-semibold">
          <li className=" bg-army pt-4 rounded ">React</li>
          <li className=" bg-army py-4 rounded">Javascript</li>
          <li className=" bg-army pt-4 rounded">HTML5</li>
          <li className=" bg-army pt-4 rounded">CSS3</li>
          <li className=" bg-army py-4 rounded">Tailwind CSS</li>
          <li className=" bg-army pt-4 rounded">CMS</li>
        </ul>
      </section>

      <section className="text-justify max-sm:mb-14">
        <h2 className="text-2xl text-center mt-5 text-army">About</h2>
        <p>
          Welcome to my portfolio! My passion lies in crafting engaging user
          interfaces that make a lasting impression. <br />
          Transitioning from a legal background, I pursued my fascination with
          technology and immersed myself in the world of code. This journey
          involved building and, at times, breaking things to gain a deep
          understanding of software development. Each challenge I encounter is
          seen as an opportunity for learning and growth.
        </p>
      </section>
    </div>
  )
}
export default Home