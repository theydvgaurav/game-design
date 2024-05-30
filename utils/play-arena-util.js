class PlayArenaUtil {
    swapObjects(obj1, obj2) {
        let temp = Object.assign({}, obj1);
        Object.assign(obj1, obj2);
        Object.assign(obj2, temp);
    }
}

export default PlayArenaUtil