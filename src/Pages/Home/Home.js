import { MenuItem, TextField } from "@mui/material"
import Categories from "../../Data/Categories"
import "./Home.css"

const Home = () => {
  return <div className='content'>
    <div className='settings'>
      <span style={{ fontSize: 50 }}>Quiz Settings</span>


      <div className='settings__select'>
        <TextField
          style={{ marginBottom: 25 }}
          label="Enter your name"
          variant="outlined" />

        <TextField
          select
          style={{ marginBottom: 30 }}
          label="Select category"
          variant="outlined"
        >
          {
            Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))
          }
        </TextField>

        <TextField
          select
          style={{ marginBottom: 30 }}
          label="Select Difficulty"
          variant="outlined"
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>

          <MenuItem key="Easy" value="easy">
            Medium
          </MenuItem>

          <MenuItem key="Easy" value="easy">
            Hard
          </MenuItem>
        </TextField>
      </div>
    </div>

    <img src="/quiz1.png" className="banner" alt="quiz img" />
  </div>
}

export default Home