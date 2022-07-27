import './index.css'

const CreateTab = props => {
  const {details, onActiveTab} = props
  const {tabId, displayText} = details

  const onClicked = () => {
    onActiveTab(tabId)
  }

  return (
    <li className="li">
      <p className="tab-name" onClick={onClicked}>
        {displayText}
      </p>
    </li>
  )
}
export default CreateTab
