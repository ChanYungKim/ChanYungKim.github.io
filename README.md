# ChanYungKim.github.io

## Unused Code
#### - Dropdown

- CSS
```
.dropdown {
  position: relative;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
}

#dropdownToggle {
  display: none; /* Hide the checkbox */
}

.dropdown-label {
  background-color: transparent;
  color: #000;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.dropdown-content {
  display: none; /* Hide dropdown content by default */
  position: absolute;
  background-color: transparent;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

#dropdownToggle:checked + .dropdown-label + .dropdown-content {
  display: block; /* Show dropdown content when checkbox is checked */
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1; /* Change background on hover */
}
```

- HTML
```
  <article>
    <div class="dropdown">
      <input type="checkbox" id="dropdownToggle" />
      <label for="dropdownToggle" class="dropdown-label"><b>WORK EXPERIENCE</b></label>
      <div class="dropdown-content">
          <a href="#">Société Générale</a>
          <a href="#">NamWah Intelligent Automation Limited</a>
      </div>
    </div>
  </article>
```