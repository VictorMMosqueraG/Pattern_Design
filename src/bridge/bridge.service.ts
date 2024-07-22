
import { Injectable } from '@nestjs/common';
import { TV } from './class/tv';
import { BasicRemote } from './class/basicRemote';
import { AdvancedRemote } from './class/advandeRemote';
import { Radio } from './class/radio';

@Injectable()
export class BridgeService {

    constructor(
       
    ){}

    public login(){
        const tv = new TV();
        const radio = new Radio();
    
        const basicRemoteForTV = new BasicRemote(tv);
        const advancedRemoteForRadio = new AdvancedRemote(radio);
    
        console.log("Using Basic Remote on TV:");
        basicRemoteForTV.togglePower();
        basicRemoteForTV.volumeUp();
    
        console.log("\nUsing Advanced Remote on Radio:");
        advancedRemoteForRadio.togglePower();
        advancedRemoteForRadio.volumeDown();
        advancedRemoteForRadio.mute();
    }
}
