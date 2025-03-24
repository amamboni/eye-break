const buttonClasses = {
  flex: () => `flex items-center justify-center gap-2.5`,
  background: () => `bg-white hover:bg-primary-light active:bg-primary-light disabled:bg-zinc`,
  text: () => `hover:text-primary disabled:text-stone`,
  border: () => `border hover:border-primary disabled:border-slate`,
  ring: () => `focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1`,
  transition: () => `transition ease-in-out duration-150`,
  base: () => `p-2.5 rounded`,
  all: () =>
    [
      buttonClasses.base(),
      buttonClasses.flex(),
      buttonClasses.background(),
      buttonClasses.text(),
      buttonClasses.border(),
      buttonClasses.ring(),
      buttonClasses.transition(),
    ].join(' '),
}

export default buttonClasses
