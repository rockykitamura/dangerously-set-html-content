// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="dangerously-set-html-content" />
      <div />
    </>
  );
}

export default App;
