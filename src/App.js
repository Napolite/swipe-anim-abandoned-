import "./App.css";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import $, { nodeName } from "jquery";

function App() {
  const [act, setActive] = useState(0);
  const [openup, setOpenUp] = useState(false);
  // $(".active").css({ background: "red" });

  const click = () => {
    if (act < 5) {
      $(function () {
        var n = $(".child").css("left");
        $(".child").css({ left: `calc(${n} - 400px)` });
        $(".child").eq(act).removeClass("active");
        $(".child").prop("onclick", null).off("click");

        $(".child")
          .eq(act + 1)
          .addClass("active");
        setActive(act + 1);
      });
    }
  };

  const unclick = () => {
    if (act > 0) {
      $(function () {
        var n = $(".child").css("left");
        $(".child").css({ left: `calc(${n} + 400px)` });
        $(".child").eq(act).removeClass("active");
        $(".child")
          .eq(act - 1)
          .addClass("active");
        setActive(act - 1);
      });
    }
  };

  const openActive = (e) => {
    setOpenUp(!openup);
    if (!openup) {
      $(".button").css({ display: "none" });
      $(".container").css({
        height: "100vh",
        marginTop: "0",
      });
      $(".child").css({ display: "none" });
      $(".active").css({
        display: "block",
        left: "410px",
        transition: "none",
        height: "250px",
        marginTop: "200px",
        animation: "fillScreen 1s forwards",
      });
    } else {
      $(".container").css({
        height: "250px",
        marginTop: "200px",
      });
      $(".active").css({
        margin: "0px 10px",
        transition: "0.5s",
        position: "relative",
        background: "yellow",
        animation: "redScreen 1s forwards",
      });
      $(".button").css({ display: "block" });
      $(".child").css({ display: "block" });
    }
  };

  return (
    <>
      <div className="container">
        <div className="child active" onClick={act === 0 && openActive}>
          hello world1
        </div>
        <div className="child" onClick={act === 1 && openActive}>
          hello world2
        </div>
        <div className="child" onClick={act === 2 && openActive}>
          hello world3
        </div>
        <div className="child" onClick={act === 3 && openActive}>
          hello world4
        </div>
        <div className="child" onClick={act === 4 && openActive}>
          hello world5
        </div>
        <div className="child" onClick={act === 5 && openActive}>
          hello world6
        </div>
      </div>
      <button className="button" onClick={click}>
        scroll
      </button>
      <button className="button" onClick={unclick}>
        unscroll
      </button>
    </>
  );
}

export default App;
