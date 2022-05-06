import React from "react";
import Head from "../styles/head";
import Buttons from "../styles/buttons";
import Input from "../styles/input";
import Number from "../from-to/Number";
import ToWhere from "../from-to/ToWhere";
import styled from "styled-components";

const Contains = ({ handleSubmit, handleSubmissionChange, checkboxGenres, checkboxPlatforms, danger, submission, genresLoaded, platformsLoaded }) => {
  return (
    <>
      <Head>
        <h1>Submit your own game!</h1>
      </Head>
      <form className='containerForm' onSubmit={handleSubmit}>
        <div className='buttonArea'>
          <Buttons type='submit'>Submit</Buttons>
          <ToWhere to='/home' inner='Go home' />
        </div>
        <div className='infoInput'>
          <div className='top'>
            <Title 
              danger={danger && 'red'}
              placeholder={danger ? 'A title is required' : 'Title *'}
              name='name'
              value={submission.name}
              onChange={handleSubmissionChange}
            />
            <Rating>
              <label>rating</label>
              <Number
                type='number'
                change={handleSubmissionChange}
                value={submission.rating}
                name='rating'
              />
            </Rating>
            <Released>
              <label>released</label>
              <Number
                type='date'
                change={handleSubmissionChange}
                value={submission.released}
                name='released'
              />
            </Released>
          </div>
          <div className='descriptionBox'>
            <Description
              as='textarea'
              danger={danger && 'red'}
              type='text'
              placeholder={danger ? 'A description is required' : 'description *'}
              name='description'
              value={submission.description}
              onChange={handleSubmissionChange}
            />
          </div>
        </div>
        <div className='genresInput'>
          {
            genresLoaded.map((r, index) => (
              <Block key={index}>
                <input 
                  id={index}
                  type='checkbox'
                  name={r}
                  value={r}
                  onChange={checkboxGenres}
                />
                <label htmlFor={index}>{r}</label>
              </Block>
            ))
          }
        </div>
        <div className='platformsInput'>
          {
            platformsLoaded.map((r, index) => (
              <Block key={index}>
                <input 
                  id={index}
                  type='checkbox'
                  name={r}
                  value={r}
                  onChange={checkboxPlatforms}
                />
                <label htmlFor={index}>{r}</label>
              </Block>
            ))
          }
        </div>
      </form>
    </>
  );
};

const Block = styled.div`
  padding: 12px;
  display: inline-block;
  border: 1px solid black;
  background: ${(props) => props.theme.glassBlack};
  position: relative;
  transition: box-shadow 0.2s ease;
  &:hover { box-shadow: ${(props) => props.theme.hoverShadow}; }
  label { color: white; margin-right: 2em; }
  color: white;
  width: 230.5px;
`;

const Title = styled(Input).attrs((props) => ({ type: 'text' }))`
  font-weight: 700;
  font-size: 27px;
  margin: 20px;
  position: absolute;
  top: 0;
  left: 20px;
  background: #8080801c;
  color: white;
  ::placeholder { font-size: 27px; color: white; }
`;

const Description = styled(Input)`
  font-family: 'Helvetica Neue', serif;
  resize: none;
  margin: 20px;
  padding: 10px;
  height: 139px;
  width: 1260px;
  position: absolute;
  left: 20px;
  background: #8080801c;
  color: white;
`;

const Rating = styled.div`
  color: white;
  width: 70px;
  position: absolute;
  top: 15px;
  right: 340px;
`;

const Released = styled.div`
  color: white;
  width: 135px;
  position: absolute;
  top: 15px;
  right: 110px;
`;

export default Contains;