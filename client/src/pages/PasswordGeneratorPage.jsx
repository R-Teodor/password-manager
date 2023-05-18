import { useState, useRef } from 'react'
import { useAppContext } from '../context/appContext'
import { MdContentCopy } from 'react-icons/md'
import '../styles/toggleSwitch.css'

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
  const [passRange, setPassRange] = useState(6)

  const passwordRef = useRef()
  const { getRandomPassword, isLoading } = useAppContext()

  const handleRequest = async () => {
    let config = {
      length: passRange,
      config: toggleSwitch,
    }
    // console.log(config)
    const pass = await getRandomPassword(config)
    // console.log('Password in component', pass)
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
  }
  return (
    <section className='form-container'>
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

          {copySucces && <div>Copied!</div>}
          {copyError && <div>Failed!</div>}
          <div className='range-input--container'>
            <input
              type='range'
              onChange={(e) => setPassRange(e.target.value)}
              value={passRange}
              min='6'
              max='24'
            />
            <input type='text' readOnly value={passRange} />
          </div>

          <div className='switch__container'>
            <p>Want to add numbers?</p>
            <ToggleSwitch
              label={'numbers'}
              callback={handleToggleSwitch}
              status={toggleSwitch.numbers}
            />
          </div>

          <div className='switch__container'>
            <p>Want to add LowerCase?</p>
            <ToggleSwitch
              label={'lower'}
              callback={handleToggleSwitch}
              status={toggleSwitch.lower}
            />
          </div>
          <div className='switch__container'>
            <p>Want to add UpperCase?</p>
            <ToggleSwitch
              label={'upper'}
              callback={handleToggleSwitch}
              status={toggleSwitch.upper}
            />
          </div>
          <div className='switch__container'>
            <p>Want to add Symbols?</p>
            <ToggleSwitch
              label={'symbols'}
              callback={handleToggleSwitch}
              status={toggleSwitch.symbols}
            />
          </div>

          <button
            type='button'
            onClick={handleRequest}
            className='form__button pt-4'
          >
            Generate password
          </button>
          {isLoading && <h1 style={{ color: 'whitesmoke' }}>Loading...</h1>}
        </form>
      </div>
    </section>
  )
}

const ToggleSwitch = ({ label, callback, status }) => {
  return (
    <div className='container'>
      <div className='toggle-switch'>
        <input
          type='checkbox'
          className='checkbox'
          name={label}
          id={label}
          checked={status}
          onChange={callback}
        />
        <label className='label' htmlFor={label}>
          <span className='inner' />
          <span className='switch' />
        </label>
      </div>
    </div>
  )
}
export default PasswordGeneratorPage
