import React from "react";
import "./App.css";
import {
  Card,
  Icon,
  Segment,
  Label,
  List,
  Divider,
  Item,
  Image as ImageSemantic,
} from "semantic-ui-react";

import styled from "styled-components";

import jelo from "./assets/jelo.jpg";
import vc from "./assets/vc.jpeg";
import gf from "./assets/gf.jpeg";
import mb from "./assets/mb.png";
import md from "./assets/md.jpg";
import bb from "./assets/bb.png";

const Image = styled.img`
  width: 12rem;
  border-radius: 50%;
`;

function App() {
  return (
    <div className='flex justify-center my-16'>
      <Card
        style={{
          height: "1500px",
          width: "1000px",
        }}
      >
        <div className='m-4'>
          <Segment className='text-xs  flex justify-between'>
            <div>
              <div className='text-3xl font-bold'>Jelo Rivera</div>
              <div className='text-xl mt-2 font-semibold'>
                Full-Stack Web Developer
              </div>
              <div className='flex mt-4'>
                <Icon name='git square'></Icon>

                <div>https://github.com/jelorivera08</div>
              </div>

              <div className='flex mt-2'>
                <Icon name='medium'></Icon>

                <div>https://medium.com/@jelorivera08</div>
              </div>

              <div className='flex mt-2'>
                <Icon name='linkedin'></Icon>

                <div>https://www.linkedin.com/in/jerald-rivera-2055b8130</div>
              </div>

              <div className='flex mt-2'>
                <Icon name='mail'></Icon>

                <div>jelorivera08@gmail.com</div>
              </div>

              <div className='flex mt-2'>
                <Icon name='mobile'></Icon>

                <div>+63 919 001 4729</div>
              </div>
            </div>

            <div>
              <Image src={jelo} alt='jelo' />
            </div>
          </Segment>
        </div>
        <div className='mx-4 flex justify-between'>
          <div className=' w-1/2'>
            <Segment className='text-xs'>
              <Label color='teal'>
                <div className='text-xl font-bold'>
                  Multidisciplinary Developer
                </div>
              </Label>
              <List divided selection>
                <List.Item>
                  <div className='flex justify-between'>
                    <div className='w-3/12'>{null}</div>
                    <div className='w-2/12 text-sm flex justify-center'>
                      Beginner
                    </div>
                    <div className='w-2/12 text-sm flex justify-center'>
                      Elementary
                    </div>
                    <div className='w-2/12 text-sm mx-4 flex justify-center'>
                      Intermediate
                    </div>
                    <div className='w-2/12 text-sm flex justify-center'>
                      Advanced
                    </div>
                    <div className='w-2/12 text-sm flex justify-center'>
                      Expert
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>JavaScript</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>React</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>HTML</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>CSS</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>Node.js</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>
                        <div className='text-xs'> SPA & PWA</div>
                      </Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>
              </List>
            </Segment>
          </div>

          <div className='ml-4 w-1/2'>
            <Segment className='text-xs'>
              <Label color='teal'>
                <div className='text-xl font-bold'>Web Dev Software</div>
              </Label>
              <List divided selection>
                <List.Item>
                  <div className='flex justify-between'>
                    <div className='w-3/12'>{null}</div>
                    <div className='w-2/12 text-sm flex justify-center'>
                      Beginner
                    </div>
                    <div className='w-2/12 text-sm flex justify-center'>
                      Elementary
                    </div>
                    <div className='w-2/12 text-sm mx-4 flex justify-center'>
                      Intermediate
                    </div>
                    <div className='w-2/12 text-sm flex justify-center'>
                      Advanced
                    </div>
                    <div className='w-2/12 text-sm flex justify-center'>
                      Expert
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>GraphQL</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>MongoDB</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>Express</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>Relay</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>Redux</Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className='flex justify-around'>
                    <div className='w-3/12'>
                      <Label horizontal>
                        <div className='text-xs'> Google Cloud</div>
                      </Label>
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12  mx-4  text-xs flex justify-center'>
                      <Icon name='star' />
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                    <div className='w-2/12 text-xs flex justify-center'>
                      {null}
                    </div>
                  </div>
                </List.Item>
              </List>
            </Segment>
          </div>
        </div>

        <div className='m-4'>
          <Segment className='text-xs'>
            <Label color='teal'>
              <div className='text-xl font-bold'>Experience</div>
            </Label>

            <div className='mt-4'>
              <Item.Group>
                <Label as='a' color='blue' ribbon>
                  <div className='text-xs'>Working experience 3</div>
                </Label>
                <Item>
                  <Item.Image size='tiny' src={vc} />

                  <Item.Content>
                    <Item.Header as='a'>Virtual Control</Item.Header>
                    <Item.Meta>Full-Stack Developer</Item.Meta>
                    <Item.Description>
                      <List as='ul'>
                        <List.Item as='li'>
                          Helped in Developing a Progressive Web App for clients
                          using React plus current JavaScript Best Practices.
                        </List.Item>
                        <List.Item as='li'>
                          Made sure every commit and Pull Request is of quality
                          clean code standard.
                        </List.Item>
                        <List.Item as='li'>
                          Integrated the PWA with AI and Machine Learning from
                          our Kiev team.
                        </List.Item>
                        <List.Item as='li'>
                          Unit tests are of paramount importance in our team
                          culture.
                        </List.Item>
                      </List>
                    </Item.Description>
                    <Item.Extra>
                      <Label>React</Label>
                      <Label>Express</Label>
                      <Label>Relay</Label>
                      <Label>MongoDB</Label>
                      <Label>Jest</Label>
                      <Label>Webpack</Label>
                      <Label>Babel</Label>
                      <Label>GraphQL</Label>
                      <Label>JavaScript</Label>
                      <Label>SPA</Label>
                      <Label>PWA</Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>

                <Label as='a' color='blue' ribbon>
                  <div className='text-xs'>Working experience 2</div>
                </Label>
                <Item>
                  <Item.Image size='tiny' src={gf} />

                  <Item.Content>
                    <Item.Header as='a'>GoFluent</Item.Header>
                    <Item.Meta>Front-End Developer</Item.Meta>
                    <Item.Description>
                      <List as='ul'>
                        <List.Item as='li'>
                          Integrated a separate React SPA into the company's
                          legacy Website
                        </List.Item>
                        <List.Item as='li'>
                          Developed and Designed React boilerplate and created a
                          component based repository for company branding.
                        </List.Item>
                        <List.Item as='li'>
                          Used Iframes for video streaming and video call group
                          staging.
                        </List.Item>
                        <List.Item as='li'>
                          Develoepd Offline features for the company's product
                          for better user experience.
                        </List.Item>
                      </List>
                    </Item.Description>
                    <Item.Extra>
                      <Label>React</Label>
                      <Label>Redux</Label>
                      <Label>Axios</Label>
                      <Label>Jest</Label>
                      <Label>Webpack</Label>
                      <Label>Babel</Label>
                      <Label>JavaScript</Label>
                      <Label>Iframe</Label>
                      <Label>SPA</Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>

                <Label as='a' color='blue' ribbon>
                  <div className='text-xs'>Working experience 1</div>
                </Label>
                <Item>
                  <Item.Image size='tiny' src={mb} />

                  <Item.Content>
                    <Item.Header as='a'>Metrobank</Item.Header>
                    <Item.Meta>Front-End Developer</Item.Meta>
                    <Item.Description>
                      <List as='ul'>
                        <List.Item as='li'>
                          Helped in refactoring vanilla JavaScript code into a
                          PWA React.
                        </List.Item>
                        <List.Item as='li'>
                          Created mobile-first responsive components and
                          integrated it into the company's website.
                        </List.Item>
                        <List.Item as='li'>
                          Used REST API services using micro-services
                          architecture and applied unit testing.
                        </List.Item>
                      </List>
                    </Item.Description>
                    <Item.Extra>
                      <Label>React</Label>
                      <Label>Redux</Label>
                      <Label>Axios</Label>
                      <Label>Java</Label>
                      <Label>MicoServices</Label>
                      <Label>MySQL</Label>
                      <Label>Jest</Label>
                      <Label>Webpack</Label>
                      <Label>Babel</Label>
                      <Label>JavaScript</Label>
                      <Label>SPA</Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </div>
          </Segment>
        </div>

        <div className='m-4'>
          <Segment>
            <div className='flex'>
              <div className='w-1/2'>
                <Label as='a' color='orange' size='tiny' tag>
                  <div className='text-xs'>Writing Articles</div>
                </Label>
                <div className='flex justify-between'>
                  <ImageSemantic src={md} size='small' />

                  <div className='text-justify text-sm pr-4'>
                    I have a passion for writing about tech! <br />
                    Several if not most of my articles are regarding current
                    best practices of the front-end industry. <br />I try to
                    have it made in a friendly beginner-friendly so that I could
                    give back to the software community and help my fellow
                    software engineers out there.
                  </div>
                </div>
              </div>
              <Divider vertical />

              <div className='w-1/2'>
                <Label as='a' color='orange' size='tiny' tag>
                  <div className='text-xs'>Personal Projects</div>
                </Label>

                <div className='flex justify-between'>
                  <ImageSemantic
                    style={{ height: "80px" }}
                    className='ml-12 mt-2'
                    src={bb}
                    size='tiny'
                  />

                  <div className='text-justify text-sm ml-2	pr-4'>
                    I do a lot of side projects for my part time!
                    <br />
                    In my projects, I incorporate a minimalist feel on my
                    client's brand. (https://babe-formula.com) <br /> Never
                    forget about web app performance using state-of-the-art
                    technologies for both front and back end. All deployed and
                    served in the Cloud using GOOGLE CLOUD PLATFORM and MongoDB.
                  </div>
                </div>
              </div>
            </div>
          </Segment>
        </div>
      </Card>
    </div>
  );
}

export default App;
