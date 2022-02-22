import React from 'react';
import './App.css';
import { Card, Icon, Segment, Label, List, Item } from 'semantic-ui-react';

import styled from 'styled-components';

import jelo from './assets/jelo.jpg';
import sg from './assets/sg.jpg';
import gf from './assets/gf.jpeg';
import mb from './assets/mb.png';
import ust from './assets/ust.jpg';
import vc from './assets/vc.jpeg';
import wpr from './assets/wpr.png';
import canon from './assets/canon.png';
import nokia from './assets/nokia.jpeg';

const Image = styled.img`
  width: 12rem;
  border-radius: 50%;
`;

function App() {
  return (
    <div className="flex justify-center my-16">
      <Card
        style={{
          width: '1000px',
          minWidth: '1000px',
        }}
      >
        <div className="m-4">
          <Segment className="text-xs  flex justify-between">
            <div>
              <div className="text-3xl font-bold">Jelo Rivera</div>
              <div className="text-xl mt-2 font-semibold">
                Full-Stack Web Developer
              </div>
              <div className="flex mt-4">
                <Icon name="git square"></Icon>

                <div>https://github.com/jelorivera08</div>
              </div>

              <div className="flex mt-2">
                <Icon name="medium"></Icon>

                <div>https://medium.com/@jelorivera08</div>
              </div>

              <div className="flex mt-2">
                <Icon name="linkedin"></Icon>

                <div>https://www.linkedin.com/in/jerald-rivera-2055b8130</div>
              </div>

              <div className="flex mt-2">
                <Icon name="mail"></Icon>

                <div>jelorivera08@gmail.com</div>
              </div>

              <div className="flex mt-2">
                <Icon name="mobile"></Icon>

                <div>+63 919 001 4729</div>
              </div>
            </div>

            <div>
              <Image src={jelo} alt="jelo" />
            </div>
          </Segment>
        </div>

        <div className="m-4">
          <Segment className="text-xs">
            <Label color="teal">
              <div className="text-xl font-bold">Academic achievement</div>
            </Label>
            <div className="flex">
              <div className="p-4">
                <img
                  style={{
                    width: '5rem',
                  }}
                  src={ust}
                  alt="ust"
                />
              </div>
              <div className="m-4">
                <div className="text-2xl font-bold">
                  University of Santo Tomas
                </div>
                <div className="text-gray-700  text-sm ">
                  June 2011 - June 2016
                </div>
                <div className="font-semibold">
                  Bachelor of Science Major in Electronics and Communications
                  Engineering
                </div>
              </div>
            </div>
          </Segment>
        </div>
        <div className="mx-4 flex justify-between">
          <div className=" w-1/2">
            <Segment className="text-xs">
              <Label color="teal">
                <div className="text-xl font-bold">
                  Multidisciplinary Developer
                </div>
              </Label>
              <List divided selection>
                <List.Item>
                  <div className="flex justify-between">
                    <div className="w-3/12">{null}</div>
                    <div className="w-2/12 text-sm flex justify-center">
                      Beginner
                    </div>
                    <div className="w-2/12 text-sm flex justify-center">
                      Elementary
                    </div>
                    <div className="w-2/12 text-sm mx-4 flex justify-center">
                      Intermediate
                    </div>
                    <div className="w-2/12 text-sm flex justify-center">
                      Advanced
                    </div>
                    <div className="w-2/12 text-sm flex justify-center">
                      Expert
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>JavaScript</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>React</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>HTML</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>CSS</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>Node.js</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>
                        <div className="text-xs"> SPA & PWA</div>
                      </Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>{' '}
                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>
                        <div className="text-xs">CI/CD</div>
                      </Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>
              </List>
            </Segment>
          </div>

          <div className="ml-4 w-1/2">
            <Segment className="text-xs">
              <Label color="teal">
                <div className="text-xl font-bold">Web Dev Software</div>
              </Label>
              <List divided selection>
                <List.Item>
                  <div className="flex justify-between">
                    <div className="w-3/12">{null}</div>
                    <div className="w-2/12 text-sm flex justify-center">
                      Beginner
                    </div>
                    <div className="w-2/12 text-sm flex justify-center">
                      Elementary
                    </div>
                    <div className="w-2/12 text-sm mx-4 flex justify-center">
                      Intermediate
                    </div>
                    <div className="w-2/12 text-sm flex justify-center">
                      Advanced
                    </div>
                    <div className="w-2/12 text-sm flex justify-center">
                      Expert
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>GraphQL</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>MongoDB</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>Express</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>Relay</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>Redux</Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>
                        <div className="text-xs"> Google Cloud</div>
                      </Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>

                <List.Item>
                  <div className="flex justify-around">
                    <div className="w-3/12">
                      <Label horizontal>
                        <div className="text-xs">AWS</div>
                      </Label>
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12  mx-4  text-xs flex justify-center">
                      <Icon name="star" />
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                    <div className="w-2/12 text-xs flex justify-center">
                      {null}
                    </div>
                  </div>
                </List.Item>
              </List>
            </Segment>
          </div>
        </div>

        <div className="m-4">
          <Segment className="text-xs">
            <Label color="teal">
              <div className="text-xl font-bold">Experience</div>
            </Label>

            <div className="mt-4">
              <Item.Group>
                <Item>
                  <Item.Image size="tiny" src={wpr} />

                  <Item.Content>
                    <Item.Header as="a">Whispir </Item.Header>
                    <Item.Meta>Full-Stack Developer (2022 - present)</Item.Meta>
                    <Item.Description>
                      <List as="ul">
                        <List.Item as="li">
                          Develop, build and own parts of the new product.
                          Overseeing development of features and testing of the
                          micro frontend.
                        </List.Item>
                        <List.Item as="li">
                          Design and create CI/CD automated pipelines using
                          BuildKite and AWS.
                        </List.Item>
                        <List.Item as="li">
                          Develop and test Infrastructure as code using AWS' CDK
                        </List.Item>
                        <List.Item as="li">
                          Create microservices using AWS Lambda, DynamoDB, and
                          S3, etc.
                        </List.Item>
                      </List>
                    </Item.Description>
                    <Item.Extra>
                      <Label>Nextjs</Label>
                      <Label>React</Label>
                      <Label>Express</Label>
                      <Label>AWS</Label>
                      <Label>AWS CDK</Label>
                      <Label>Jest</Label>
                      <Label>JavaScript</Label>
                      <Label>CI/CD</Label>
                      <Label>Cypress</Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size="tiny" src={sg} />

                  <Item.Content>
                    <Item.Header as="a">Scentre Group </Item.Header>
                    <Item.Meta>Full-Stack Developer (2020 - 2021)</Item.Meta>
                    <Item.Description>
                      <List as="ul">
                        <List.Item as="li">
                          Developed a Progressive Web App that enables our
                          retailers to reach their market with ease and
                          personalization.
                        </List.Item>
                        <List.Item as="li">
                          Content model structuring, data structure design and
                          architecture.
                        </List.Item>
                        <List.Item as="li">
                          Integrated Contentful API to our NextJS front end
                          using modern CMS.
                        </List.Item>
                        <List.Item as="li">
                          Created multiple Google Cloud Functions that helps us
                          enable our users with data synchronization, security
                          and exhaustive CRON jobs.
                        </List.Item>
                      </List>
                    </Item.Description>
                    <Item.Extra>
                      <Label>Nextjs</Label>
                      <Label>React</Label>
                      <Label>Express</Label>
                      <Label>Redux</Label>
                      <Label>Google Storage</Label>
                      <Label>Jest</Label>
                      <Label>Webpack</Label>
                      <Label>Babel</Label>
                      <Label>Google Cloud</Label>
                      <Label>JavaScript</Label>
                      <Label>SPA</Label>
                      <Label>PWA</Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size="tiny" src={vc} />

                  <Item.Content>
                    <Item.Header as="a">Virtual Control</Item.Header>
                    <Item.Meta>Front-End Developer (2019 - 2020)</Item.Meta>
                    <Item.Description>
                      <List as="ul">
                        <List.Item as="li">
                          Developed and Integrated Single Page Applications and
                          integrated it with Machine Learning APIs for different
                          cargo clients.
                        </List.Item>
                        <List.Item as="li">
                          Brainstorm helpful features and deliver them for our
                          clients in a fast paced start up environment.
                        </List.Item>
                        <List.Item as="li">
                          Integrated Machine Learning APIs from our Kiev AI team
                          into the SPA using GraphQL, etc
                        </List.Item>
                        <List.Item as="li">
                          Unit test-centric development focusing on both
                          integration and functionality tests.
                        </List.Item>
                      </List>
                    </Item.Description>
                    <Item.Extra>
                      <Label>React</Label>
                      <Label>Express</Label>
                      <Label>Redux</Label>
                      <Label>AWS</Label>
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

                <Item>
                  <Item.Image size="tiny" src={gf} />

                  <Item.Content>
                    <Item.Header as="a">GoFluent</Item.Header>
                    <Item.Meta>Front-End Developer (2018 - 2019)</Item.Meta>
                    <Item.Description>
                      <List as="ul">
                        <List.Item as="li">
                          Integrated a separate React SPA into the company's
                          legacy Website
                        </List.Item>
                        <List.Item as="li">
                          Developed and Designed React boilerplate and created a
                          component based repository for company branding.
                        </List.Item>
                        <List.Item as="li">
                          Used Iframes for video streaming and video call group
                          staging.
                        </List.Item>
                        <List.Item as="li">
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

                <Item>
                  <Item.Image size="tiny" src={mb} />

                  <Item.Content>
                    <Item.Header as="a">Metrobank</Item.Header>
                    <Item.Meta>Front-End Developer (2018)</Item.Meta>
                    <Item.Description>
                      <List as="ul">
                        <List.Item as="li">
                          Helped in refactoring vanilla JavaScript code into a
                          PWA React.
                        </List.Item>
                        <List.Item as="li">
                          Created mobile-first responsive components and
                          integrated it into the Metrobank's website.
                        </List.Item>
                        <List.Item as="li">
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
                <Item>
                  <Item.Image size="tiny" src={nokia} />
                  <Item.Content>
                    <Item.Header as="a">Nokia</Item.Header>
                    <Item.Meta>Software Developer (2017 - 2018)</Item.Meta>
                    <Item.Description>
                      <List as="ul">
                        <List.Item as="li">
                          Delivered and developed PWAs for Nokia's internal web
                        </List.Item>
                        <List.Item as="li">
                          Worked on creating and maintaining internal company
                          tools for software development
                        </List.Item>
                      </List>
                    </Item.Description>
                    <Item.Extra>
                      <Label>Javascript</Label>
                      <Label>C++</Label>
                      <Label>React</Label>
                      <Label>Jest</Label>
                      <Label>Webpack</Label>
                      <Label>Babel</Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size="tiny" src={canon} />
                  <Item.Content>
                    <Item.Header as="a">Canon</Item.Header>
                    <Item.Meta>Software Developer (2017)</Item.Meta>
                    <Item.Description>
                      <List as="ul">
                        <List.Item as="li">
                          Worked in a team that implements new software features
                          for canon products
                        </List.Item>
                        <List.Item as="li">
                          Used different basic and advanced software development
                          concepts and techniques such as OOP
                        </List.Item>
                      </List>
                    </Item.Description>
                    <Item.Extra>
                      <Label>C++</Label>
                      <Label>Javascript</Label>
                      <Label>C#</Label>
                      <Label>OOP</Label>
                      <Label>Firmware</Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </div>
          </Segment>
        </div>
      </Card>
    </div>
  );
}

export default App;
