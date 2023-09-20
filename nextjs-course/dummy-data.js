const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: '코드와 아이디어를 공유하는 자리',
        description:
            '프로젝트 개발 중인 분들은 진행 상황을 공유하고 도움이 필요한 부분을 협력자들과 함께 해결할 수 있는 기회를 얻을 수 있습니다.',
        location: '대구광역시, 북구, 복현로 35',
        date: '2021-05-12',
        image: 'images/dog_1.jpg',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: '내향인들의 모임',
        description:
            '독서를 즐기는 멤버들을 위한 독서 모임을 개최합니다. 다양한 장르의 책을 읽고 토론하는 자리를 마련해드립니다.',
        location: '대구광역시, 동구, 화랑로91길 7',
        date: '2021-05-30',
        image: 'images/dog_2.jpg',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: '외향인들의 모임',
        description:
            '피크닉, 하이킹, 자전거 타기 등 야외 활동을 통해 자연을 만끽하고 새로운 친구들과 시간을 보낼 수 있습니다.',
        location: '대구광역시, 수성구, 화랑로 70',
        date: '2022-04-10',
        image: 'images/dog_3.jpg',
        isFeatured: true,
    },
];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}
