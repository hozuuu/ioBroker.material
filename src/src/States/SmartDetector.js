/**
 * Copyright 2018 bluefox <dogafox@gmail.com>
 *
 * Licensed under the Creative Commons Attribution-NonCommercial License, Version 4.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://creativecommons.org/licenses/by-nc/4.0/legalcode.txt
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
import Theme            from '../theme';

import IconWorking      from 'react-icons/lib/ti/cog-outline';
import IconUnreach      from 'react-icons/lib/md/perm-scan-wifi';
import IconMaintain     from 'react-icons/lib/md/priority-high';
import IconLowbat       from 'react-icons/lib/md/battery-alert';
import IconError        from 'react-icons/lib/md/error';

const additionalParameters = {
    'WORKING':      {icon: IconWorking,    color: Theme.tile.tileIndicatorsIcons.working},
    'UNREACH':      {icon: IconUnreach,    color: Theme.tile.tileIndicatorsIcons.unreach},
    'LOWBAT':       {icon: IconLowbat,     color: Theme.tile.tileIndicatorsIcons.lowbat},
    'MAINTAIN':     {icon: IconMaintain,   color: Theme.tile.tileIndicatorsIcons.maintain},
    'ERROR':        {icon: IconError,      color: Theme.tile.tileIndicatorsIcons.error},
    'DIRECTION':    {                      color: Theme.tile.tileIndicatorsIcons.direction},
    'CONNECTED':    {icon: IconUnreach,    color: Theme.tile.tileIndicatorsIcons.connected},
};

class IOBChannelDetector {
    constructor() {
        this.detector = new window.ChannelDetector();
    }

    detect(/*objects, keys, id, usedIds, ignoreIndicators*/) {
        const result = this.detector.detect.apply(this.detector, arguments);

        if (result) {
            result.forEach(one => {
                one.states.forEach(state => {
                    if (state.id && additionalParameters[state.name]) {
                        Object.assign(state, additionalParameters[state.name]);
                    }
                });
            })
        }

        return result;
    }
}

export default IOBChannelDetector;