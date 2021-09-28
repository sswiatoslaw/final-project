import React from 'react';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, PinterestIcon, PinterestShareButton, RedditShareButton, RedditIcon } from 'react-share';
import './SocialMedia.scss'

const SocialMedia = () => {
  return (
        <>
            <div class="social_share">
                <FacebookShareButton url={'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Freactjsexample.com%252Fsocial-media-share-buttons-and-share-counts-for-react%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=uk_UA'}>
                    <FacebookIcon size={40} round={true} />
                </FacebookShareButton>

                <PinterestShareButton url={'https://www.pinterest.com/pin/create/button/?url=https://reactjsexample.com/social-media-share-buttons-and-share-counts-for-react/&media=&description=Social%20media%20share%20buttons%20and%20share%20counts%20for%20React'} >
                    <PinterestIcon size={40} round={true}/>
                </PinterestShareButton>

                <TwitterShareButton url={'https://twitter.com/intent/tweet?url=https://reactjsexample.com/social-media-share-buttons-and-share-counts-for-react/&text=Social%20media%20share%20buttons%20and%20share%20counts%20for%20React'}>
                    <TwitterIcon size={40} round={true} />
                </TwitterShareButton>

                <RedditShareButton url={'https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Freactjsexample.com%252Fsocial-media-share-buttons-and-share-counts-for-react%252F%26title%3DSocial%2520media%2520share%2520buttons%2520and%2520share%2520counts%2520for%2520React'}>
                    <RedditIcon size={40} round={true}/>
                </RedditShareButton>
                
            </div>
        </>
  )
}

export default SocialMedia;