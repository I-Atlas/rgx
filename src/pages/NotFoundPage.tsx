import React from 'react';

function randomRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const notFoundTexts = [
  {
    title: 'Not Found',
    text: 'Oh snap! The cat ate your files again!',
  },
  {
    title: 'Whoops!',
    text: 'Not Found',
  },
  {
    title: 'Far Out',
    text:
      'We`re not sure how yo got here... But you may be lost in cuberspace',
  },
  {
    title: 'Oh no! The pond`s empty!',
    text: 'Not Found',
  },
  {
    title: 'Lost in cyberspace?',
    text: 'It looks like that expression doesn`t exist',
  },
];

export const NotFoundPage: React.FC = () => {
  const randomInfo = notFoundTexts[randomRange(0, notFoundTexts.length - 1)];
  const randomImg = `/images/${randomRange(1, 10)}.svg`;

  return (
    <div>
      <div className="patterns__no-result">
        <img width={300} height={300} src={randomImg} alt="Not found" />
        <h2>{randomInfo.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: randomInfo.text }} />
      </div>
    </div>
  );
};
