import './index.css'

const CreateApp = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="app-li">
      <img src={imageUrl} alt={appName} className="app" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default CreateApp
