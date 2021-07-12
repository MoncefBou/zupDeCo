const secondToHour = (seconds) => {
    const hoursWithoutMinute = seconds % 3600

    if (hoursWithoutMinute === 0) {
        const hour = seconds / 3600
        const formatHour = hour + 'h'
        return formatHour
    } else {
        const hour = (seconds - hoursWithoutMinute) / 3600
        const formatHour = hour + 'h30'
        return formatHour
    }
}

export default secondToHour;

