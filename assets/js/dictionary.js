var dict = {
    'i': 'kuv',
    'me': 'kuv',
    'my': 'kuv',
    'you': 'koj',
    'love': 'hlub',
    'dad': 'txiv',
    'father': 'txiv',
    'mom': 'nam',
    'mother': 'nam',
    'parents': {1:'nam hab txiv', 2:'txiv hab nam'},
    'and': 'hab',
    'yours': {1:'koj tug', 2:'koj le'},
    'your': 'koj',
    'brother': 'kwv ntij',
    'good': 'zoo',
    'heart': {1:'lub sab', 2:'lub plawv'},
    'hmong': 'moob',
    'vang': 'vaaj',
    'lee': 'lis',
    'xiong': 'xyooj',
    'moua': 'mua',
    'yang': 'yaaj',
    'thao': 'thoj',
    'her': {1:'[pronoun] tug puj nam', 2:'[last name/ceeg] hawj'},
    'hello': 'nyob zoo',
    'forever': 'ib txhib',
    'go': 'moog',
    'knife': {1:'rag', 2:'tshag'},
    'am': 'yog',
    'friend': 'tub phooj ywg',
    'are': 'yog',
    'yes': 'yog',
    'wrong': 'tsis yog',
    'like': 'nyam',
    'not': 'tsis yog',
    'water': 'dlej',
    'live': 'nyob',
    'please': 'thov',
    'mine': {1:'kuv tug', 2:'kuv le'},
    'that': 'ko',
    'stay': 'nyob',
    'drink': 'ho',
    'very': 'hev',
    'yesterday': 'nag mo',
    'hurt': 'mob',
    'older': 'hlub',
    'cousin': 'kwv ntij',
    'run': 'dlha',
    'jump': 'dlha',
    'tomorrow': {1:'pig kig', 2:'taag kig'},
    'hide': 'riv nkuam',
    'move': {1:'riv', 2:'tshiv', 3:'txaav'},
    'see': 'pum',
    'where': 'qhov twauv',
    'walk': {1:'moog kev',2:'taug kev'},
    'bad': 'tsis zoo',
    'is': 'yog',
    'too': 'hab',
    'also': 'hab',
    'house': 'lub tseb',
    'home': 'tseb',
    'this': 'hnob',
    'grandma': 'puj',
    'name': ' lub npe',
    'call': 'hu',
    'sue': 'xwm',
    'female': 'tug quas puj',
    'male': 'tug txiv neej',
    'girl': {1:'tug ntxhais', 2:'miv ntxhais'},
    'lady': 'tug ntxhais',
    'guy': 'tug tub hluas',
    'boy': {1:'tug tub', 2:'miv tub'},
    'man': 'txiv neej',
    'woman': 'quas puj',
    'old': 'laug',
    'young': 'hluas',
    'do': 'ua',
    'work': 'hu luj',
    'what': '',
    'nice': {1:'zoo', 2:'sab zoo'},
};

var phrases = {
    'good heart': 'sab zoo',
    'first name': 'npe',
    'last name': 'lub ceeg',
    'you are mine': 'koj yog kuv tug',
    'who are your parents': 'koj nam hab txiv yog leej twg',
    'your parents are called': 'hu koj nam hab txiva leej caag',
    'what are youred parents\' names': 'koj nam hab txiv hu leej caag',
    'your parents are called': 'koj nam hab txiv hu leej caag',
    'how are you': 'koj nyob le caag',
    'good bye': 'sib nstib dlua',
    'good morning': 'nyob zoo sawv ntxuv',
    'good night': 'pw zoo koj',
    'how old are you': 'koj muaj pes tsawg xyoo',
    'what is your name': 'koj lub npe hu le caag',
    'thank you': 'ua tsaug',
    'nice to meet you': 'zoo sab tau ntsib koj',
    'i am sorry': 'kuv thov txim',
    'you\'re welcome': 'tsi ua le caag',
    'what happen to you': 'puas ua le caag rua koj',
    'i am hungry': 'kuv tshaib plaab',
    'i am thristy': 'kuv nqhes dlej',
    'i do not know': 'kuv tsis paub',
    'where is the restroom': 'chaav dlej nyob qhov twg',
    'i am tire': 'kuv nkeeg nkeeg',
    'i am well': 'kuv nyob zoo',
    'i don\'t like it': 'kuv tsis nyam',
    'i like it': 'kuv nyam',
    'good job': 'zoo heev',
    'what time is it': 'pes tsawg teev lawm',
    'i love you': 'kuv hlub koj',
    'i like you': 'kuv nyam koj',
    'you love me': 'koj hlub kuv',
    'what is your last name': 'koj yog ceeg dlab txib',
    'happy new year': 'nyob zoo xyoo txhab',
    'my older brother': {1:'kuv tug dhlib laug (brother)', 2:'kuv tug nywb (sister)'},
    'you hurt me': 'koj ua mob kuv',
    'don\'t break my heart': 'tsis txob ua kuv tou sab',
    'don\'t make me sad': 'tsis txob ua kuv tou sab',
}

//consider string.split(' ') then find the words

function search(input) {
    var searchKey = input.toLowerCase();
    var sentence = '';
    var extented = [];
    var found = false;

    if(input.length === 0)
    {
        var paragrph = document.createElement('p');
        var msg = document.createTextNode('Keep it up');
        paragrph.id = "keep-up-message";
        paragrph.appendChild(msg);
        document.getElementById('result').innerHTML = ''; 
        document.getElementById('result').appendChild(paragrph);
    }
    else
    {
        //multiple word search
        if(searchKey.includes(' '))
        {
            var words = searchKey.split(' ');
            if(!found)  //search in phrase dictionary
            { 
                for(var phrase in phrases)
                {
                    var eComparison = phrase.split(' ');    //english comparison
                    var hComparison;
                    if(typeof phrases[phrase] === 'string')
                        hComparison = phrases[phrase].split(' ');   //hmong comparison
                    var wSize, cSize, hSize, mid;

                    wSize = words.length,
                    cSize = eComparison.length,
                    hSize = hComparison.length,
                    mid = wSize/2;

                    //english
                    if(wSize === cSize && words[0] === eComparison[0]) //first word matches with size
                    {
                        if(words[mid] === eComparison[mid])
                        {
                            if(words[wSize-1] === eComparison[cSize-1])
                            {
                                sentence = sentence.concat('', phrases[phrase]);
                                found = true;
                                console.log('english to hmong');
                                break;
                            }
                        }
                    }
                    //hmong
                    else if(wSize === hSize && words[0] === hComparison[0])
                    {
                        console.log('check 1.2');
                        if(words[mid] === hComparison[mid])
                        {
                            if(words[wSize-1] === hComparison[hSize-1])
                            {
                                sentence = sentence.concat('', phrase);
                                found = true;
                                console.log('hmong to english');
                                break;
                            }
                        }
                    }
                }
            }
            if(!found) //search in main dictionary
            {
                for(var key in dict)
                {
                    var eComparison = key.split(' ');    //english comparison
                    var hComparison;
                    if(typeof dict[key] === 'string')
                        hComparison = dict[key].split(' ');   //hmong comparison
                    var wSize, cSize, hSize, mid;
                    wSize = words.length,
                    cSize = eComparison.length,
                    hSize = hComparison.length,
                    mid = wSize/2;
                    //english word
                    if(wSize === cSize && words[0] === eComparison[0]) //first word matches with size
                    {
                        if(words[wSize-1] === eComparison[cSize-1])
                        {
                            if(typeof dict[key] === 'object' && dict[key] !== null){
                                for(var elem in dict[key]){
                                    if(dict[key][elem] !== null)
                                        sentence = sentence.concat(' / ', dict[key][elem]);
                                }
                                sentence = sentence.concat(' ', sentence.substring(3));
                                found = true;
                                console.log('english to hmong');
                                break;
                            }
                            else
                            {
                                sentence = sentence.concat('', dict[key]);
                                found = true;
                                console.log('english to hmong');
                                break;
                            }
                        }
                    }
                    //hmong word
                    if(wSize === hSize && words[0] === hComparison[0]) //first word matches with size
                    {
                        if(words[mid] === hComparison[mid])
                        {
                            if(words[wSize-1] === hComparison[hSize-1])
                            {
                                sentence = sentence.concat('', key);
                                found = true;
                                console.log('hmong to english');
                                break;
                            }
                        }
                    }
                    if(typeof dict[key] === 'object' && dict[key] !== null)
                    {
                        for(var elem in dict[key])
                        {
                            var hComparisonCheck = dict[key][elem].split(' ');
                            var hccSize = hComparisonCheck.length;
                            if(words[0] === hComparisonCheck[0] && wSize === hccSize)
                            {
                                if(words[wSize-1] === hComparisonCheck[hccSize-1])
                                {
                                    sentence = sentence.concat(' ', key);
                                    found = true;
                                    console.log('hmong to english');
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            // single word translation to english
            if(!found && words.length !== 0)
            {
                var newSentence = [];
                for(var i = 0; i < words.length; i++)
                {
                    var translated = false;
                    for(var key in dict)
                    {
                        if(key === words[i])
                        {
                            if(typeof dict[key] === 'string')
                            {
                                newSentence.push(dict[key] + ' ');
                                translated = true;
                                break;
                            }
                            if(typeof dict[key] === 'object' && dict[key] !== null)
                            {
                                newSentence.push('(');
                                for(var item in dict[key])
                                {
                                    newSentence.push(dict[key][item] + ' / ');
                                }
                                var tmp = newSentence.pop();
                                console.log(tmp);
                                tmp = tmp.slice(0, -3);
                                console.log(tmp);
                                newSentence.push(tmp);
                                newSentence.push(')');
                                translated = true;
                                break;
                            }
                        }
                    }
                    //if not translated pushed in as is
                    if(!translated)
                    {
                        newSentence.push(words[i]);
                    }
                }
                
                sentence = newSentence.join(' ');
                found = true;
            }
            if(sentence === ''){
                sentence = sentence.concat(' ', 'unable to find translation');
            }
            document.getElementById('result').innerHTML = sentence.trimStart();
        }
        // single word search
        else
        {
            sentence = '';
            var found = false;
            for(var key in dict){
                //english word
                if(key === searchKey && !found){
                    if(typeof dict[key] === 'object' && dict[key] !== null)     //english word with multiple hmong words
                    {
                        for(var elem in dict[key])
                        {
                            if(dict[key][elem] !== null)
                                sentence = sentence.concat('   / ', dict[key][elem]);
                        }
                        sentence = sentence.substring(3);
                        found = true;
                        break;
                    }
                    else if(typeof dict[key] !== 'object' && dict[key] !== null)
                    {
                        sentence = sentence.concat('  ', dict[key]);
                        found = true;
                        break;
                    }
                }
                //hmong word
                else if(typeof dict[key] === 'string' && dict[key].includes(searchKey) && dict[key].split(' ').length === 1 && !found)
                {
                    sentence = sentence.concat(' / ', key);
                    found = true;
                }
            }
            if(sentence === ''){
                sentence = sentence.concat('  ', 'unable to find translation');
            }
            document.getElementById('result').innerHTML = sentence.substring(2);
        }
    }
    
}