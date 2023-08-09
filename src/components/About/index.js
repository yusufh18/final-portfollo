import profileImg from '../../assets/images/profile.svg';
const About = () => {
  return (
    <section>
      <h1>About Me</h1>
      <div className="about-container">
        <div className="profile-image">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="about-content">
          <div className="profile-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus. Gravida dictum fusce ut placerat orci. Molestie at elementum eu facilisis sed odio morbi. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Mi sit amet mauris commodo quis imperdiet. At elementum eu facilisis sed odio morbi. Elementum integer enim neque volutpat ac tincidunt vitae semper. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
            </p>
            <p>
              Urna id volutpat lacus laoreet non curabitur gravida. Maecenas sed enim ut sem viverra. Vel eros donec ac odio tempor orci. Netus et malesuada fames ac turpis egestas sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Pretium quam vulputate dignissim suspendisse in. Nunc id cursus metus aliquam eleifend mi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Et egestas quis ipsum suspendisse ultrices gravida dictum. In hac habitasse platea dictumst quisque sagittis purus sit. Et netus et malesuada fames ac. Hac habitasse platea dictumst vestibulum. Sed nisi lacus sed viverra tellus in hac habitasse platea.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
