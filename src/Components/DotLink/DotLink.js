import "./DotLink.css";
import dotlinkcoverimage from "../assests/Dotlink.png"

const DotLink = () => {
    return (
        <div>
            <div className="dotlink-header">
                <div className="dotlink-header-firstline">   DOTLINK    DOTLINK     DOTL</div>
                <div className="dotlink-header-secondline">AGAZINE     ANNUAL MAGAZINE</div>
            </div>
            <div className="dotlink-description">
                <div className="dotlink-description-img">
                    <img src={dotlinkcoverimage} alt="" />
                </div>
                <div className="dotlink-description-text">
                    <div className="text-header">DOTLINK</div>
                    <p className="text">
                    The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.

                    Through this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen.
                    </p>
                </div>
            </div>
            
        </div>
      );
}
 
export default DotLink;