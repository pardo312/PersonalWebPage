import React from 'react'
import './scss/AboutMe/AboutMe.scss';
import './scss/Global.scss';

function AboutMe() {
    return (
        <div id="aboutMe" className="aboutMe">
            <div className='containerPadding1' >
                <h2 className="title title_story">
                    The story
                </h2>
                <div className='containerPadding2'>
                    <img className="profilePic" src="https://i.imgur.com/zFWSXIt.jpg" alt="profileImg" />
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tincidunt lacus, scelerisque blandit diam. Aliquam tincidunt, erat at hendrerit suscipit, arcu neque tempor erat, eget hendrerit nibh nisl quis lacus. Maecenas et blandit metus. Aliquam fringilla risus a tempus bibendum. Sed consequat cursus lectus, eu congue est. Maecenas laoreet lobortis leo non efficitur. Vivamus laoreet neque nec justo blandit vestibulum vitae ut ex. Mauris blandit lorem at lacus scelerisque, quis tincidunt lacus tincidunt. Mauris convallis risus in dolor consectetur, a efficitur sapien elementum. Sed efficitur augue eget dictum pulvinar. Nulla facilisi. Pellentesque sodales orci ac nisi auctor fringilla.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default AboutMe;
