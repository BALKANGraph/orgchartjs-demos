

window.onload = function () {
    OrgChart.templates.header = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.header.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="display:block;background-color: #BFE0F1" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>';
    OrgChart.templates.header.header1 =  '<text text-anchor="middle" data-width="400" style="font-size: 18px;font-weight:bold;" fill="#3F7D95" x="200" y="20">{val}</text>';
    OrgChart.templates.header.header2 =  '<text text-anchor="middle" data-width="400"  style="font-size: 18px;" fill="#3F7D95" x="200" y="40">{val}</text>';
    OrgChart.templates.header.size = [400, 50];
    OrgChart.templates.header.node = '';
    OrgChart.templates.header.link = '<path stroke-linejoin="round" stroke="#fff" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';
    
    OrgChart.templates.split.link  = '<path stroke-linejoin="round" stroke="#fff" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';
    OrgChart.templates.split.node = '<circle cx="5" cy="5" r="5" fill="none" stroke-width="1" stroke="#fff"></circle>';

    OrgChart.templates.header.plus = '';
    OrgChart.templates.header.minus = '';

    OrgChart.templates.green0 = Object.assign({}, OrgChart.templates.header);
    OrgChart.templates.green0.node = '<rect x="0" y="0" height="90" width="80" fill="#3AB54A" stroke-width="6" stroke="#fff" rx="1" ry="1"></rect>';
    OrgChart.templates.green0.node += '<path fill="#fff" d="M25,60 55,60 40,30"></path>';
    OrgChart.templates.green0.size = [80, 90];
    OrgChart.templates.green0.plus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#68C6EA" stroke-width="1"></circle>'
        + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#68C6EA"></line>'
        + '<line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#68C6EA"></line>';
    OrgChart.templates.green0.minus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#68C6EA" stroke-width="1"></circle>'
        + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#68C6EA"></line>';   
        
    OrgChart.templates.red0 = Object.assign({}, OrgChart.templates.green0);
    OrgChart.templates.red0.node = '<rect x="0" y="0" height="90" width="80" fill="#ED1B24" stroke-width="6" stroke="#fff" rx="1" ry="1"></rect>';
    OrgChart.templates.red0.node += '<path fill="#fff" d="M25,30 55,30 40,60"></path>';

    OrgChart.templates.orange0 = Object.assign({}, OrgChart.templates.green0);
    OrgChart.templates.orange0.node = '<rect x="0" y="0" height="90" width="80" fill="#F7941D" stroke-width="6" stroke="#fff" rx="1" ry="1"></rect>';
    OrgChart.templates.orange0.node += '<path fill="#fff" d="M8,45 38,60 38,30"></path>';
    OrgChart.templates.orange0.node += '<path fill="#fff" d="M72,45 42,60 42,30"></path>';



    OrgChart.templates.green_percent0 = Object.assign({}, OrgChart.templates.green0);
    OrgChart.templates.green_percent0.node = '<rect x="0" y="0" height="90" width="80" fill="#3AB54A" stroke-width="6" stroke="#fff" rx="1" ry="1"></rect>';
    OrgChart.templates.green_percent0.node += '<g transform="matrix(0.5,0,0,0.5,20,0)"><path fill="#fff" d="M25,60 55,60 40,30"></path></g>';
    OrgChart.templates.green_percent0.node += '<text style="font-size: 16px;font-family: Roboto" fill="#ffffff" x="58" y="52" >%</text>';
    OrgChart.templates.green_percent0.percent = '<text style="font-size: 36px;font-family: Roboto" fill="#ffffff" x="40" y="65" text-anchor="middle">{val}</text>';


    OrgChart.templates.red_percent0 = Object.assign({}, OrgChart.templates.green_percent0);
    OrgChart.templates.red_percent0.node = '<rect x="0" y="0" height="90" width="80" fill="#ED1B24" stroke-width="6" stroke="#fff" rx="1" ry="1"></rect>';
    OrgChart.templates.red_percent0.node += '<g transform="matrix(0.5,0,0,0.5,20,0)"><path fill="#fff" d="M25,30 55,30 40,60"></path></g>';
    OrgChart.templates.red_percent0.node += '<text style="font-size: 16px;font-family: Roboto" fill="#ffffff" x="58" y="52" >%</text>';
    OrgChart.templates.red_percent0.percent = '<text style="font-size: 36px;font-family: Roboto" fill="#ffffff" x="40" y="65" text-anchor="middle">{val}</text>'


    OrgChart.templates.green1 = Object.assign({}, OrgChart.templates.green0);
    OrgChart.templates.green1.size = [220, 90];
    OrgChart.templates.green1.node = '<rect x="0" y="0" height="90" width="220" fill="#fff" stroke-width="16" stroke="#68C6EA"></rect>';
    OrgChart.templates.green1.node += '<text style="font-size: 14px;" fill="#676464; font-weight:bold;" x="17" y="30">Strategy</text>';
    OrgChart.templates.green1.strategy = '<text data-width="190" data-text-overflow="multiline" style="font-size: 14px;" fill="#676464" x="17" y="50">{val}</text>';

    OrgChart.templates.red1 = Object.assign({}, OrgChart.templates.green1);
    OrgChart.templates.orange1 = Object.assign({}, OrgChart.templates.green1);

    OrgChart.templates.green1.node += '<g transform="matrix(0.5,0,0,0.5,175,0)"><path fill="#3AB54A" d="M25,60 55,60 40,30"></path></g>';
    OrgChart.templates.red1.node += '<g transform="matrix(0.5,0,0,0.5,175,0)"><path fill="#ED1B24" d="M25,30 55,30 40,60"></path></path></g>';
    OrgChart.templates.orange1.node += '<g transform="matrix(0.5,0,0,0.5,175,0)"><path fill="#F7941D" d="M8,45 38,60 38,30"></path><path fill="#F7941D" d="M72,45 42,60 42,30"></path></g>';
    
    
    OrgChart.templates.green_percent1 = Object.assign({}, OrgChart.templates.green0);
    OrgChart.templates.green_percent1.link = '<path stroke-linejoin="round" stroke="#fff" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';
    OrgChart.templates.green_percent1.size = [400, 270];
    OrgChart.templates.green_percent1.node = '<rect fill="#E6F0F2" x="0" y="0" width="400" height="270"></rect>';
    OrgChart.templates.green_percent1.node += '<rect fill="#fff" x="10" y="10" width="250" height="250"></rect>';
    OrgChart.templates.green_percent1.node += '<rect fill="#fff" x="270" y="10" width="120" height="120"></rect>';
    OrgChart.templates.green_percent1.node += '<text style="font-size: 14px;font-weight:bold;" fill="#676464" x="17" y="35">Goal</text>';
    OrgChart.templates.green_percent1.goal = '<text data-text-overflow="multiline" data-width="230"  style="font-size: 14px;" fill="#676464" x="17" y="55">{val}</text>'

    
    OrgChart.templates.red_percent1 = Object.assign({}, OrgChart.templates.green_percent1);

    OrgChart.templates.green_percent1.node += '<text text-anchor="middle" style="font-size: 14px;" fill="#3AB54A" x="330" y="40">Change</text>';
    OrgChart.templates.green_percent1.node += '<g transform="matrix(0.5,0,0,0.5,310,90)"><path fill="#3AB54A" d="M25,60 55,60 40,30"></path></g>';
    OrgChart.templates.red_percent1.node += '<text text-anchor="middle" style="font-size: 14px;" fill="#ED1B24" x="330" y="40">Change</text>';
    OrgChart.templates.red_percent1.node += '<g transform="matrix(0.5,0,0,0.5,310,90)"><path fill="#ED1B24" d="M25,30 55,30 40,60"></path></g>';

    OrgChart.templates.green_percent1.percent = '<text style="font-size: 36px;font-family: Roboto" fill="#3AB54A" x="330" y="85" text-anchor="middle">{val}</text>';
    OrgChart.templates.red_percent1.percent = '<text style="font-size: 36px;font-family: Roboto" fill="#ED1B24" x="330" y="85" text-anchor="middle">{val}</text>';

    OrgChart.templates.green_percent1.node += '<text style="font-size: 16px;font-family: Roboto" fill="#3AB54A" x="350" y="75" >%</text>';
    OrgChart.templates.red_percent1.node += '<text style="font-size: 16px;font-family: Roboto" fill="#ED1B24" x="350" y="75" >%</text>';

    



    OrgChart.templates.green_percent2 = Object.assign({}, OrgChart.templates.green_percent1);
    
    OrgChart.templates.green_percent2.node = '<rect fill="#E6F0F2" x="0" y="0" width="400" height="270"></rect>';
    OrgChart.templates.green_percent2.node += '<rect fill="#fff" x="10" y="10" width="250" height="120"></rect>';
    OrgChart.templates.green_percent2.node += '<rect fill="#fff" x="270" y="10" width="120" height="120"></rect>';
    OrgChart.templates.green_percent2.node += '<rect fill="#fff" x="140" y="140" width="250" height="120"></rect>';
    OrgChart.templates.green_percent2.node += '<text style="font-size: 14px;font-weight:bold;" fill="#676464" x="17" y="35">Goal</text>';
    OrgChart.templates.green_percent2.node += '<text style="font-size: 14px;font-weight:bold;" fill="#676464" x="150" y="160">Goal Owner</text>';
    OrgChart.templates.green_percent2.node += '<text text-anchor="end"  style="font-size: 14px;font-weight:bold;" fill="#676464" x="380" y="230">Designation</text>';

    OrgChart.templates.green_percent2.goal = '';
    OrgChart.templates.green_percent2.goalShort = '<text data-text-overflow="multiline" data-width="230"  style="font-size: 14px;" fill="#676464" x="17" y="55">{val}</text>';
    OrgChart.templates.green_percent2.photo = '<image preserveAspectRatio="xMaxYMax slice" xlink:href="{val}" x="10" y="140"  width="120" height="120"></image>';
    OrgChart.templates.green_percent2.designation = '<text text-anchor="end"  data-width="230"  style="font-size: 14px;" fill="#676464" x="380" y="250">{val}</text>';
    OrgChart.templates.green_percent2.goalOwner = '<text data-width="230"  style="font-size: 14px;" fill="#676464" x="150" y="180">{val}</text>';

    OrgChart.templates.red_percent2 = Object.assign({}, OrgChart.templates.green_percent2);

    OrgChart.templates.green_percent2.node += '<text text-anchor="middle" style="font-size: 14px;" fill="#3AB54A" x="330" y="40">Change</text>';
    OrgChart.templates.green_percent2.node += '<g transform="matrix(0.5,0,0,0.5,310,90)"><path fill="#3AB54A" d="M25,60 55,60 40,30"></path></g>';
    OrgChart.templates.red_percent2.node += '<text text-anchor="middle" style="font-size: 14px;" fill="#ED1B24" x="330" y="40">Change</text>';
    OrgChart.templates.red_percent2.node += '<g transform="matrix(0.5,0,0,0.5,310,90)"><path fill="#ED1B24" d="M25,30 55,30 40,60"></path></g>';

    OrgChart.templates.green_percent2.node += '<text style="font-size: 16px;font-family: Roboto" fill="#3AB54A" x="350" y="75" >%</text>';
    OrgChart.templates.red_percent2.node += '<text style="font-size: 16px;font-family: Roboto" fill="#ED1B24" x="350" y="75" >%</text>';

    OrgChart.templates.green_percent2.percent = '<text style="font-size: 36px;font-family: Roboto" fill="#3AB54A" x="330" y="85" text-anchor="middle">{val}</text>';
    OrgChart.templates.red_percent2.percent = '<text style="font-size: 36px;font-family: Roboto" fill="#ED1B24" x="330" y="85" text-anchor="middle">{val}</text>';

    OrgChart.templates.green2 = Object.assign({}, OrgChart.templates.green1);

    OrgChart.templates.green2.size = [220, 180];
    OrgChart.templates.green2.node = '<rect x="0" y="0" height="180" width="220" fill="#fff" stroke-width="16" stroke="#68C6EA"></rect>';
    OrgChart.templates.green2.node += '<text style="font-size: 14px;" fill="#676464; font-weight:bold;" x="17" y="30">Strategy</text>';
    OrgChart.templates.green2.node += '<text style="font-size: 14px;" fill="#676464; font-weight:bold;" x="17" y="110">Secondary Strategy</text>';

    OrgChart.templates.green2.secondaryStrategy = '<text data-width="190" data-text-overflow="multiline" style="font-size: 14px;" fill="#676464" x="17" y="130">{val}</text>';;

    OrgChart.templates.red2 = Object.assign({}, OrgChart.templates.green2);
    OrgChart.templates.orange2 = Object.assign({}, OrgChart.templates.green2);

    OrgChart.templates.green2.node += '<g transform="matrix(0.5,0,0,0.5,175,0)"><path fill="#3AB54A" d="M25,60 55,60 40,30"></path></g>';
    OrgChart.templates.red2.node += '<g transform="matrix(0.5,0,0,0.5,175,0)"><path fill="#ED1B24" d="M25,30 55,30 40,60"></path></path></g>';
    OrgChart.templates.orange2.node += '<g transform="matrix(0.5,0,0,0.5,175,0)"><path fill="#F7941D" d="M8,45 38,60 38,30"></path><path fill="#F7941D" d="M72,45 42,60 42,30"></path></g>';

    OrgChart.MIXED_LAYOUT_ALL_NODES = false;
    var chart = new OrgChart(document.getElementById("tree"), {
        template: 'header',
        showXScroll: OrgChart.scroll.visible,
        showYScroll: OrgChart.scroll.visible,
        mouseScrool: OrgChart.action.none,
        scaleInitial: 1,
        siblingSeparation: 40,
        enableSearch: false,
        layout: OrgChart.treeRightOffset,
        align: OrgChart.ORIENTATION,
        nodeMouseClick: OrgChart.action.none,
        collapse: {
            level: 2,
            allChildren: true
        },
        expand: {
            nodes: [6,7,8,9]
        },
        tags: {
            red: {
                template: "red0"
            },
            green: {
                template: "green0"
            },
            orange: {
                template: "orange0"
            },
            red_percent: {
                template: "red_percent0"
            },
            green_percent: {
                template: "green_percent0"
            }
        },
        nodeBinding:{
            header1: 'header1',
            header2: 'header2',
            percent: 'percent',
            goal: 'goal',
            goalShort: 'goalShort',
            strategy: 'strategy',
            photo: 'photo',
            designation: 'designation',
            goalOwner: 'goalOwner',
            secondaryStrategy: 'secondaryStrategy'
        }
    });

    chart.load([
        {id: 0, header1: "Welcome!", header2: "Here is your Strategy Board"},
        {id: 1, pid: 0, tags: ["red"], strategy: 'Nunc sodales finibus ullamcorper. Sed aliquet risus.', secondaryStrategy: 'Donec aliquam porttitor metus sit amet euismod.' },
        {id: 2, pid: 0, tags: ["green"], strategy: 'Nunc sodales finibus ullamcorper. Sed aliquet risus.', secondaryStrategy: 'Donec aliquam porttitor metus sit amet euismod.' },
        {id: 3, pid: 0, tags: ["red"] , strategy: 'Nunc sodales finibus ullamcorper. Sed aliquet risus.', secondaryStrategy: 'Donec aliquam porttitor metus sit amet euismod.'},
        {id: 4, pid: 0, tags: ["orange"], strategy: 'Nunc sodales finibus ullamcorper. Sed aliquet risus.', secondaryStrategy: 'Donec aliquam porttitor metus sit amet euismod.' },
        {id: 5, pid: 0, tags: ["green"] , strategy: 'Nunc sodales finibus ullamcorper. Sed aliquet risus.', secondaryStrategy: 'Donec aliquam porttitor metus sit amet euismod.'},

        {id: 6, pid: 2, tags: ["red_percent"], percent: '16',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Quisque lectus lorem, consequat in hendrerit eu, sagittis vitae massa. Morbi commodo sapien magna, eget ultricies tellus facilisis vel.', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.', photo: 'https://cdn.balkan.app/shared/1.jpg', designation: 'CEO', goalOwner: 'Jude Taylor'},
        {id: 7, pid: 2, tags: ["green_percent"],  percent: '43', goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Quisque lectus lorem, consequat in hendrerit eu, sagittis vitae massa. Morbi commodo sapien magna, eget ultricies tellus facilisis vel.', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.',  photo: 'https://cdn.balkan.app/shared/2.jpg', designation: 'General manager', goalOwner: 'Antonio Cook'},
        {id: 8, pid: 2, tags: ["red_percent"], percent: '31',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Quisque lectus lorem, consequat in hendrerit eu, sagittis vitae massa. Morbi commodo sapien magna, eget ultricies tellus facilisis vel.', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.',  photo: 'https://cdn.balkan.app/shared/10.jpg',  designation: 'CFO', goalOwner: 'Cillian Anderson'},
        {id: 9, pid: 2, tags: ["green_percent"], percent: '67',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.',  photo: 'https://cdn.balkan.app/shared/4.jpg',   designation: 'CTO', goalOwner: 'Haider Williamson'},

        {id: 10, pid: 6, tags: ["red_percent"], percent: '31',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',  photo: 'https://cdn.balkan.app/shared/5.jpg', designation: 'Marketing', goalOwner: 'Nico Bates', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.'},
        {id: 11, pid: 6, tags: ["red_percent"],  percent: '10',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',  photo: 'https://cdn.balkan.app/shared/6.jpg', designation: 'Sales', goalOwner: 'Arthur Davidson', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.'},

        {id: 12, pid: 1, tags: ["red_percent"], percent: '16',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Quisque lectus lorem, consequat in hendrerit eu, sagittis vitae massa. Morbi commodo sapien magna, eget ultricies tellus facilisis vel.', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.', photo: 'https://cdn.balkan.app/shared/1.jpg', designation: 'CEO', goalOwner: 'Jude Taylor'},
        {id: 13, pid: 1, tags: ["green_percent"],  percent: '43', goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Quisque lectus lorem, consequat in hendrerit eu, sagittis vitae massa. Morbi commodo sapien magna, eget ultricies tellus facilisis vel.', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.',  photo: 'https://cdn.balkan.app/shared/2.jpg', designation: 'General manager', goalOwner: 'Antonio Cook'},
        {id: 14, pid: 3, tags: ["red_percent"], percent: '31',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Quisque lectus lorem, consequat in hendrerit eu, sagittis vitae massa. Morbi commodo sapien magna, eget ultricies tellus facilisis vel.', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.',  photo: 'https://cdn.balkan.app/shared/10.jpg',  designation: 'CFO', goalOwner: 'Cillian Anderson'},
        {id: 15, pid: 3, tags: ["green_percent"], percent: '67',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.',  photo: 'https://cdn.balkan.app/shared/4.jpg',   designation: 'CTO', goalOwner: 'Haider Williamson'},

        {id: 16, pid: 5, tags: ["red_percent"], percent: '31',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Quisque lectus lorem, consequat in hendrerit eu, sagittis vitae massa. Morbi commodo sapien magna, eget ultricies tellus facilisis vel.', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.',  photo: 'https://cdn.balkan.app/shared/10.jpg',  designation: 'CFO', goalOwner: 'Cillian Anderson'},
        {id: 17, pid: 5, tags: ["green_percent"], percent: '67',  goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id. Duis in vestibulum lectus. Nam consectetur, purus eget feugiat rutrum, leo ligula placerat ipsum, id placerat neque libero a odio. Morbi nunc massa, tincidunt a mattis id, ultricies in nisi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet', goalShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet est, placerat consequat dui interdum id.',  photo: 'https://cdn.balkan.app/shared/4.jpg',   designation: 'CTO', goalOwner: 'Haider Williamson'},
    ]);

    
    function change(){
        var slider = document.getElementById('slider');
        chart.config.tags.green.template = 'green' + slider.value;
        chart.config.tags.orange.template = 'orange'+ slider.value;
        chart.config.tags.red.template = 'red'+ slider.value;;

        chart.config.tags.red_percent.template = 'red_percent'+ slider.value;;
        chart.config.tags.green_percent.template = 'green_percent'+ slider.value;;

        chart.draw();
    }

    document.getElementById('slider').addEventListener('change', change);

    var timeout = null;
    window.addEventListener("wheel", function(event){
        event.preventDefault();
        event.stopPropagation();
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            if (event.deltaY < 0 && slider.value < 3){
                slider.value++;
            }
            else if (event.deltaY > 0 && slider.value > 0){
                slider.value--;
            }
            change();
        }, 200);
    }, { passive: false });
};
