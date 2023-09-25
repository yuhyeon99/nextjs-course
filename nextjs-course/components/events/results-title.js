import Button from "../ui/button";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>{humanReadableDate} 이벤트 목록</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
