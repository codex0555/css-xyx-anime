document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player', {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen', 'quality', 'pip', 'speed'],
      quality: {
        default: 480,
        options: [720, 480, 360],
      },
    });

    player.on('enterfullscreen', () => {
      screen.orientation.lock('landscape');
    });

    player.on('exitfullscreen', () => {
      screen.orientation.unlock();
    });

    player.on('pip', (event) => {
      if (event.type === 'enterpip') {
        // Code to handle entering PiP mode
      } else if (event.type === 'leavepip') {
        // Code to handle leaving PiP mode
      }
    });

    let touchStartTimes = [];
    const tapDurationThreshold = 300;

    player.on('touchstart', (event) => {
      const currentTime = Date.now();
      touchStartTimes.push(currentTime);

      touchStartTimes = touchStartTimes.filter(time => currentTime - time < tapDurationThreshold);

      if (touchStartTimes.length === 3) {
        const seekTime = player.currentTime + 30;
        player.currentTime = Math.max(0, Math.min(seekTime, player.duration - 1));
        touchStartTimes = [];
      }
    });

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('<?= $hls_link ?>');
      hls.attachMedia(player.media);
    } else if (player.media.canPlayType('application/vnd.apple.mpegurl')) {
      player.media.src = '<?= $hls_link ?>';
    }
  });
