import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';
import CommentBox from '../client/src/components/CommentBox.jsx';
import DescriptionBar from '../client/src/components/DescriptionBar.jsx';
import Modal from '../client/src/components/Modal.jsx';
import Photo from '../client/src/components/Photo.jsx';
import PhotoGallery from '../client/src/components/PhotoGallery.jsx';

const testData = [
  { "photoId": 4, "photoUrl": "https://s3-us-west-1.amazonaws.com/welp-photos/002-01.jpg", "id": 2, "date": "5/14/2014", "userId": "8498943434", "userName": "gscoular3", "userFollowers": 357, "userReviews": 739 },
  { "photoId": 5, "photoUrl": "https://s3-us-west-1.amazonaws.com/welp-photos/002-02.jpg", "id": 2, "date": "3/23/2015", "userId": "3825079139", "userName": "aivashintsov4", "userFollowers": 867, "userReviews": 890 },
  { "photoId": 6, "photoUrl": "https://s3-us-west-1.amazonaws.com/welp-photos/002-03.jpg", "id": 2, "date": "6/2/2015", "userId": "8788200485", "userName": "glambotin5", "userFollowers": 889, "userReviews": 649 },
  { "photoId": 7, "photoUrl": "https://s3-us-west-1.amazonaws.com/welp-photos/002-04.jpg", "id": 2, "date": "4/7/2017", "userId": "2608088597", "userName": "jferencowicz6", "userFollowers": 607, "userReviews": 68 },
  { "photoId": 8, "photoUrl": "https://s3-us-west-1.amazonaws.com/welp-photos/002-05.jpg", "id": 2, "date": "11/18/2016", "userId": "2773851188", "userName": "lkinneally7", "userFollowers": 571, "userReviews": 649 },
]

const photoGallery = shallow(<PhotoGallery />);
const wrapper = photoGallery

describe('PhotoGallery', () => {

  it('PhotoGallery component should render the wrapper div', () => {
    expect(photoGallery.is('.wrapper')).toBe(true);
  });

  it('should mount only 1', function () {
    expect(mount(<PhotoGallery />).find('.wrapper').length).toBe(1);
  });

  const wrapper = photoGallery;
  wrapper.state().showModal = false;
  it('handleClose in photoGallery toggles the boolean in state.showModal', () => {

    expect(wrapper.state().showModal).toEqual(false);
    wrapper.instance().handleOpen();
    expect(wrapper.state().showModal).toEqual(true);
    wrapper.instance().handleClose();
  });
});


describe('Photo', () => {

  const photo = shallow(<Photo key={4} photo={testData[0]} handleOpen={() => wrapper.setState({ showModal: true })} totalNumberOfPics={5}/>);

  it('Photo component should render the picture', () => {
    expect(photo.is('.picture')).toBe(true);
  });

  it('should mount only 1', function () {
    expect(mount(<Photo key={4} photo={testData[0]} handleOpen={() => wrapper.setState({ showModal: true })} totalNumberOfPics={5} />).find('.picture').length).toBe(1);
  });

  photo.state().hovered = false;
  it('handleClose in photoGallery toggles the boolean in state.showModal', () => {

    expect(photo.state().hovered).toEqual(false);
    photo.instance().mouseOnPic();
    expect(photo.state().hovered).toEqual(true);
    photo.instance().mouseLeavePic();
  });
});

describe('Photo component renders the photo correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Photo key={4} photo={testData[0]} handleOpen={() => wrapper.setState({ showModal: true })} totalNumberOfPics={5}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

describe('DescriptionBar component renders the description correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <DescriptionBar  photo={testData[0]} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

describe('CommentBox component renders the comment correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <CommentBox photo={testData[0]} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

describe('Modal component renders the modal correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Modal 
        selectedPhoto={testData[1]}
        handleOpen={() => wrapper.setState({ showModal: false })}
        previousPhoto={testData[0]}
        nextPhoto={testData[2]}
        modalIndex={1}
        totalNumberOfPics={5} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

describe('PhotoGallery component renders the PhotoGallery correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <PhotoGallery/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

// // describe('TourPage', () => {

// //   it('should match snapshot', () => {
// //     const images = ['tour', 'test'];
// //     const descriptions = ['descriptions', 'test'];
// //     const view = renderer.create(
// //       <TourPage images={images} descriptions={descriptions} />
// //     ).toJSON();

// //     expect(view).toMatchSnapshot();
// //   });

// // });


// //   it('handleListViewClick in HomePage toggles the boolean in state.listView', () => {

// //     expect(wrapper.state().listView).toEqual(false);
// //     wrapper.instance().handleListViewClick();
// //     expect(wrapper.state('listView')).toEqual(true);
// //     wrapper.instance().handleListViewClick();

// //   });

// //   const tourButton = shallow(<Tour handlePageViewClick={() => wrapper.setState({ tourView: true })} />);

// //   it('handlePageViewClick in Tour toggles the boolean in state.tourView', () => {

// //     expect(wrapper.state().tourView).toEqual(false);
// //     tourButton.find('.tour_button').simulate('click');
// //     expect(wrapper.state('tourView')).toEqual(true);
// //     tourButton.find('.tour_button').simulate('click');

// //   });

// //   const tourButtons = shallow(<TourPage handleListViewClick={() => wrapper.setState({ listView: true })} handlePageViewClick={() => wrapper.setState({ tourView: false })} images={testData.images} descriptions={testData.descriptions} />);

// //   it('handlePageViewClick in TourPage toggles the boolean in state.tourView', () => {

// //     expect(wrapper.state().tourView).toEqual(true);
// //     tourButtons.find('.back_button').simulate('click');
// //     expect(wrapper.state('tourView')).toEqual(false);
// //     tourButtons.find('.back_button').simulate('click');

// //   });

// //   it('handleListViewClick in TourPage toggles the boolean in state.listView', () => {

// //     expect(wrapper.state().listView).toEqual(false);
// //     tourButtons.find('.tour_button').simulate('click');
// //     expect(wrapper.state('listView')).toEqual(true);
// //     tourButtons.find('.tour_button').simulate('click');

// //   });

// //   jest.mock('axios', () => {
// //     const sampleHome = [
// //       { title: 'test home', url: 'sample_url' }
// //     ];

// //     return {
// //       get: jest.fn(() => Promise.resolve(sampleHome)),
// //     };
// //   });

// //   it('get home on #componentDidMount', () => {
// //     const home = homePage;

// //     home.update();
// //     setTimeout(() => {
// //       expect(axios.get).toHaveBeenCalled();
// //       expect(axios.get).toHaveBeenCalledWith('sample_url');
// //       expect(app.state()).toHaveProperty('home', [
// //         { title: 'test home', url: 'sample_url' }
// //       ]);
// //     }, 1000);
// //   });
// // });

// // describe('Introduction', () => {

// //   const home = {
// //     location: 'test',
// //     rating: 3,
// //     title: 'test'
// //   };

// //   it('Introduction component should render the introduction div', () => {
// //     expect(shallow(<Introduction home={home} />).is('.introduction')).toBe(true);
// //   });

// //   it('should mount only 1', function () {
// //     expect(mount(<Introduction home={home} />).find('.introduction').length).toBe(1);
// //   });

// // });


// // describe('Picture', () => {

// //   it('should match snapshot', () => {
// //     const home = {
// //       image: {
// //         living_room: 'test'
// //       }
// //     };
// //     const view = renderer.create(
// //       <Picture home={home} />
// //     ).toJSON();

// //     expect(view).toMatchSnapshot();
// //   });

// // });

// // describe('Save', () => {

// //   it('should match snapshot', () => {
// //     const home = {
// //       saved: true
// //     };
// //     const view = renderer.create(
// //       <Save home={home} />
// //     ).toJSON();

// //     expect(view).toMatchSnapshot();
// //   });

// // });

// // describe('Share', () => {

// //   const home = {
// //     shared: false
// //   };

// //   it('should match snapshot', () => {
// //     const view = renderer.create(
// //       <Share home={home} />
// //     ).toJSON();

// //     expect(view).toMatchSnapshot();
// //   });


// // });

// // describe('Tour', () => {

// //   it('should match snapshot', () => {
// //     const view = renderer.create(
// //       <Tour />
// //     ).toJSON();

// //     expect(view).toMatchSnapshot();
// //   });

// // });

// // describe('TourPage', () => {

// //   it('should match snapshot', () => {
// //     const images = ['tour', 'test'];
// //     const descriptions = ['descriptions', 'test'];
// //     const view = renderer.create(
// //       <TourPage images={images} descriptions={descriptions} />
// //     ).toJSON();

// //     expect(view).toMatchSnapshot();
// //   });

// // });

// // describe('ListView', () => {

// //   it('should match snapshot', () => {
// //     const images = ['list', 'test'];
// //     const view = renderer.create(
// //       <ListView images={images} />
// //     ).toJSON();

// //     expect(view).toMatchSnapshot();
// //   });

// // });