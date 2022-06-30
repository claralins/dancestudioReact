import React, { Component } from "react";
import { Fade, Stagger } from "react-animation-components";

function RenderQuote({ quotes }) {
  return (
    <>
      {" "}
      <Stagger in>
        {quotes.map((quote) => {
          return (
            <Fade in key={quote.id}>
              <blockquote className="blockquote">
                <p className="mb-0 quote-text">{quote.comment}</p>
                <footer className="blockquote-footer">
                  <em>{quote.author}</em>, {quote.aula} student.
                </footer>
              </blockquote>
            </Fade>
          );
        })}
      </Stagger>
    </>
  );
}

function Quotes(props) {
  const quotes = props.quotes.map((quote) => {
    return <RenderQuote quote={quote} />;
  });
  return (
    <div className="container quotes-container">
      <div className="row">
        <h1 className="text-center cta-header">
          Join more than 200 happy dancers!
        </h1>
      </div>
      <row>{quotes}</row>
    </div>
  );
}

export default Quotes;
