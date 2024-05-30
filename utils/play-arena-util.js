class PlayArenaUtil {
    swapObjects(obj1, obj2) {
        let temp = obj1;
        obj1 = obj2;
        obj2 = temp;
        return [obj1, obj2]
    }
}

export default PlayArenaUtil