import Layout from './Layout/Layout'

import { Toaster } from 'sonner';

function App() {

  return (
    <>
      <Layout></Layout>
      <Toaster position={window.innerWidth < 768 ? "top-center" : "top-right"} />
    </>
  )
}

export default App
