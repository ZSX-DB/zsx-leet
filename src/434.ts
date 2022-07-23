const countSegments = (s: string): number => s.split(' ').filter(word => word !== '').length

export default countSegments
