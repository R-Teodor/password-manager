const SettingsPage = () => {
  return (
    <section className='form-container'>
      <div className='form-box'>
        <form>
          <h1>Form Styling</h1>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              required
              placeholder='Enter username'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              required
              placeholder='Enter password'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Enter Email'
            />
          </div>
          <button type='button'>submit</button>
        </form>
      </div>
    </section>
  )
}
export default SettingsPage
