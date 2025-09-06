gdjs.starting_32sceneCode = {};
gdjs.starting_32sceneCode.localVariables = [];
gdjs.starting_32sceneCode.GDNewSprite2Objects1= [];
gdjs.starting_32sceneCode.GDNewSprite2Objects2= [];
gdjs.starting_32sceneCode.GDHalwaiObjects1= [];
gdjs.starting_32sceneCode.GDHalwaiObjects2= [];
gdjs.starting_32sceneCode.GDNewTextInputObjects1= [];
gdjs.starting_32sceneCode.GDNewTextInputObjects2= [];
gdjs.starting_32sceneCode.GDNewTextObjects1= [];
gdjs.starting_32sceneCode.GDNewTextObjects2= [];


gdjs.starting_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.starting_32sceneCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.starting_32sceneCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.starting_32sceneCode.GDNewSprite2Objects1[i].getBehavior("Animation").getAnimationSpeedScale() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.starting_32sceneCode.GDNewSprite2Objects1[k] = gdjs.starting_32sceneCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.starting_32sceneCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Halwai"), gdjs.starting_32sceneCode.GDHalwaiObjects1);
{for(var i = 0, len = gdjs.starting_32sceneCode.GDHalwaiObjects1.length ;i < len;++i) {
    gdjs.starting_32sceneCode.GDHalwaiObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Iframe Soulful Sounds of Rajasthan _ Traditional Rajasthani Instrumental for Stress-free Mood [XAXnwkmc6xU]2.mp3", false, 65, 1);
}}

}


};

gdjs.starting_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.starting_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.starting_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.starting_32sceneCode.GDHalwaiObjects1.length = 0;
gdjs.starting_32sceneCode.GDHalwaiObjects2.length = 0;
gdjs.starting_32sceneCode.GDNewTextInputObjects1.length = 0;
gdjs.starting_32sceneCode.GDNewTextInputObjects2.length = 0;
gdjs.starting_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.starting_32sceneCode.GDNewTextObjects2.length = 0;

gdjs.starting_32sceneCode.eventsList0(runtimeScene);
gdjs.starting_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.starting_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.starting_32sceneCode.GDHalwaiObjects1.length = 0;
gdjs.starting_32sceneCode.GDHalwaiObjects2.length = 0;
gdjs.starting_32sceneCode.GDNewTextInputObjects1.length = 0;
gdjs.starting_32sceneCode.GDNewTextInputObjects2.length = 0;
gdjs.starting_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.starting_32sceneCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['starting_32sceneCode'] = gdjs.starting_32sceneCode;
