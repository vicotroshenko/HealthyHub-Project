import css from "./Container.module.css"

export const Container = ({ children }) => {
	return (
    <main className={css.content_section}>
      <div className={css.container}>{children}</div>
    </main>
  );
}