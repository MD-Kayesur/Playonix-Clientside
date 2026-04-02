import Layout from './Layout/Layout'
import { Toaster } from 'sonner';
import AutoTranslator from './components/LanguageToggle/AutoTranslator';

function App() {

  return (
    <>
      <AutoTranslator />
      <Layout></Layout>
      <Toaster position={window.innerWidth < 768 ? "top-center" : "top-right"} />
    </>
  )
}

export default App

