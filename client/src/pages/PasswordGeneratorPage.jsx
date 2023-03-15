import { useState, useRef } from 'react'
import { useAppContext } from '../context/appContext'
import { MdContentCopy } from 'react-icons/md'
import FormWrapper from '../styles/components/Form'
const initialToggleState = {
  numbers: false,
  lower: false,
  upper: true,
  symbols: true,
}

const PasswordGeneratorPage = () => {
  const [pass, setPass] = useState('')
  const [toggleSwitch, setToggleSwitch] = useState(initialToggleState)
  const [copyError, setCopyError] = useState(false)
  const [copySucces, setCopySucces] = useState(false)

  const passwordRef = useRef()
  const { getRandomPassword, isLoading } = useAppContext()

  const handleRequest = async () => {
    let config = {
      length: 24,
      config: toggleSwitch,
    }
    console.log(config)
    const pass = await getRandomPassword(config)
    console.log('Password in component', pass)
    setPass(pass)
  }
  const handleToggleSwitch = (e) => {
    setToggleSwitch({
      ...toggleSwitch,
      [e.target.name]: !toggleSwitch[e.target.name],
    })
  }

  const handleClipboard = () => {
    navigator.clipboard.writeText(passwordRef.current.value).then(
      () => {
        setCopySucces(true)
        setTimeout(() => {
          setCopySucces(false)
        }, 2000)
      },
      () => setCopyError(true)
    )
    // navigator.clipboard.readText().then((clipText) => console.log(clipText))
  }
  return (
    <FormWrapper>
      <div className='form-box'>
        <form>
          <h1>Gen Secure Password</h1>
          <div className='form-group'>
            <div className='icon-group'>
              <input
                type='text'
                value={pass}
                readOnly
                id='clipboard-password'
                ref={passwordRef}
              />
              <button
                className='icon-btn'
                type='button'
                onClick={handleClipboard}
                disabled={pass ? false : true}
              >
                <MdContentCopy className='icon' />
              </button>
            </div>
          </div>
          {/* <button
            type='button'
            onClick={handleClipboard}
            disabled={pass ? false : true}
          >
            Copy
          </button> */}
          {copySucces && <div>Copied!</div>}
          {copyError && <div>Failed!</div>}
          <input
            type='range'
            onChange={(e) => console.log(e.target.value)}
            min='6'
            max='24'
            step='6'
          />
          <div>
            <label htmlFor='numbers'>Want to add numbers</label>
            <input
              type='checkbox'
              value='numbers'
              id='numbers'
              name='numbers'
              checked={toggleSwitch.numbers}
              onChange={handleToggleSwitch}
            />
          </div>
          <div>
            <label htmlFor='lower'>Want to add lowerCase letters</label>
            <input
              type='checkbox'
              value='lower'
              id='lower'
              name='lower'
              checked={toggleSwitch.lower}
              onChange={handleToggleSwitch}
            />
          </div>
          <div>
            <label htmlFor='upper'>Want to add upperCase letters</label>
            <input
              type='checkbox'
              value='upper'
              id='upper'
              name='upper'
              checked={toggleSwitch.upper}
              onChange={handleToggleSwitch}
            />
          </div>
          <div>
            <label htmlFor='symbols'>Want to add symbols</label>
            <input
              type='checkbox'
              value='symbols'
              id='symbols'
              name='symbols'
              checked={toggleSwitch.symbols}
              onChange={handleToggleSwitch}
            />
          </div>
          <button type='button' onClick={handleRequest}>
            Generate password
          </button>
          {isLoading && <h1 style={{ color: 'whitesmoke' }}>Loading...</h1>}
        </form>
      </div>
    </FormWrapper>
  )
}
export default PasswordGeneratorPage
